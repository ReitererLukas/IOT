import mongoose, {Schema, Document, Model} from "mongoose";
import {IDevice, DeviceBaseDocument} from "../../interfaces/IDevice";
import {hashPassword} from "../../services/AuthService";
import {createToken} from "../../services/jwtDeviceService";
import device from "../../api/routes/device";

const DeviceSchema: Schema = new Schema({
  name: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  token: {type: String},
  state: {type: String}
}, {versionKey: false});

//generate Token
DeviceSchema.pre<DeviceBaseDocument>('save', function (next) {

  if (this.isModified("token")) {
    this.token = createToken(this.name, this.password);
  }
  next(); // will call the next hook
});

//hash password
DeviceSchema.pre<DeviceBaseDocument>('save', function (next) {
  if (this.token == null) {
    next();
  }
  if (this.isModified("password")) {
    this.password = hashPassword(this.password);
  }
  next();
});

// Export the model and return your IUser interface
const deviceModel: Model<IDevice> = mongoose.model<IDevice>('device', DeviceSchema);

// Adds a device
export async function addDevice(name: string, password: string) {
    await deviceModel.create({
      name: name,
      password: password,
      token: null,
      state: 0
    });
}

// Gets password of device (per name)
export async function getDevice(name: string) {
    const out = await deviceModel.findOne({name: name});
    if (out == null) {
      console.error("getPassword --> " + "Device-Name existiert nicht");
      throw Error;
    }
    if (out.errors) {
      console.error("getPassword --> " + out.errors.message);
      throw out.errors;
    }
    return out;
}

export async function changeState(name: string) {
  const device = await getDevice(name);
  const newState:number = (parseInt(""+device.state)+1)%2;
  await deviceModel.updateOne({name: name},{$set:{state: newState}});
}
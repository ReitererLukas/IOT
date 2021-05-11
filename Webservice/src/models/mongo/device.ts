import mongoose, {Schema, Document, Model} from "mongoose";
import {IDevice, DeviceBaseDocument} from "../../interfaces/IDevice";
import {hashPassword} from "../../services/AuthService";
import {createToken} from "../../services/jwtDeviceService";

const DeviceSchema: Schema = new Schema({
  name: {type: String, required: true},
  password: {type: String, required: true},
  token: {type: String},
}, {versionKey: false});

//generate Token
DeviceSchema.pre<DeviceBaseDocument>('save', function (next) {

  if(this.isModified("token")) {
    this.token = createToken(this.name,this.password);
  }
  next(); // will call the next hook
});

//hash password
DeviceSchema.pre<DeviceBaseDocument>('save', function (next) {
  if(this.token == null) {
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
  const created = await deviceModel.create({
    name: name,
    password: password,
    token: null
  })
  if (created.errors) {
    console.error("addDevice --> " + created.errors.message);
    throw created.errors;
  }
}

// Gets password of device (per name)
export async function getDevice(name: string) {
  const out = await deviceModel.findOne({name: name});
  if (out.errors) {
    console.error("getPassword --> " + out.errors.message);
    throw out.errors;
  }
  return out;
}
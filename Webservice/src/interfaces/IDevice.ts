import {Document} from "mongoose";

export interface IDevice extends Document {
  name: string;
  password:string
  token: string
}
export interface DeviceBaseDocument extends IDevice, Document {
  name: string;
  password:string
  token: string
}


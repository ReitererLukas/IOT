import {Document} from "mongoose";

export interface IDevice extends Document {
  name: string;
  password:string
  token: string
  state: number
}

export interface DeviceBaseDocument extends IDevice, Document {
  name: string;
  password:string
  token: string
  state: number
}


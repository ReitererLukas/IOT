import {getDevice} from "../models/mongo/device";
import {comparePasswords} from "./AuthService";

/**Connection to the DB to get the state of the device*/
export function getDeviceState(token: String) {

}

// check if token password and real password are the same
export async function verifyDevice(name: string, password: string) {
  const hashedPwd: string = (await getDevice(name)).password;
  return comparePasswords(password, hashedPwd);
}

export async function getToken(name: string, password: string) {
  let token = "";
  if(await verifyDevice(name,password)) {
    token = (await getDevice(name)).token;
  }
  return token;
}
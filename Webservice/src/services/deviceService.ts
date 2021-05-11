import {getPassword} from "../models/mongo/device";
import {comparePasswords} from "./AuthService";

/**Connection to the DB to get the state of the device*/
export function getDeviceState(token: String) {

}

// check if token password and real password are the same
export async function verifyDevice(name: string, password: string) {
  const hashedPwd: string = await getPassword(name);
  return comparePasswords(password, hashedPwd);
}
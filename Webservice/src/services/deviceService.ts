import {getDevice} from "../models/mongo/device";
import {comparePasswords} from "./AuthService";
import {addDevice} from "../models/mongo/device";

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

export async function registerDevice(params:{name:string,password1:string,password2:string}) {
  if(params.password1 != params.password2) {
    return false;
  }
  try {
    await addDevice(params.name, params.password1);
    return true;
  } catch (err) {
    console.log("Fehler --> "+err);
    return false;
  }
}
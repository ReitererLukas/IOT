import * as jwt from "jsonwebtoken";
import config from "../config";
import {IDeviceWithoutToken} from "../interfaces/IDevice";

export function createToken(name: string, password: string) {
  return jwt.sign({name: name, password: password}, config.jwt.secret);
}

export function decodeToken(token: string): string | object {
  try {
    if (!token || !token.startsWith("Bearer") || token.length < 7) {
      throw jwt.JsonWebTokenError;
    }
  } catch (err) {
    console.error("decodeToken1 --> " + err);
  }
  let tk = token.substr(7, token.length);

  try {
    const decoded: string | object = jwt.verify(tk, config.jwt.secret);
    return decoded;
  } catch (err) {
    console.error("decodeToken2 --> " + err);
  }
}
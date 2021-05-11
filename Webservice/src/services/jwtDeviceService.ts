import * as jwt from "jsonwebtoken";
import config from "../config";

function createToken(name: string, password: string) {
  return jwt.sign({name: name, password: password}, config.jwt.secret);
}

function decodeToken(token: string) {
  if (!token || !token.startsWith("BEARER") || token.length < 7) {
    console.error("decode Token --> Fehler");
    throw jwt.JsonWebTokenError;
  }
  let tk = token.substr(7, token.length);

  let decoded;
  try {
    decoded = jwt.verify(token, config.jwt.secret);
  } catch (err) {
    throw jwt.JsonWebTokenError;
  }


}
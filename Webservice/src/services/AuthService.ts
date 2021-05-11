import bcrypt, {hash} from 'bcrypt';
import config from "../config";

export function hashPassword(password: string) {
  const salt = bcrypt.genSaltSync(config.auth.salt);
  return bcrypt.hashSync(password, salt);

}

export function comparePasswords(plainPwd: string, hashedPwd:string) {
  return bcrypt.compareSync(plainPwd, hashedPwd);
}
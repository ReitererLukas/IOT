"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePasswords = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../config"));
function hashPassword(password) {
    const salt = bcrypt_1.default.genSaltSync(config_1.default.auth.salt);
    return bcrypt_1.default.hashSync(password, salt);
}
exports.hashPassword = hashPassword;
function comparePasswords(plainPwd, hashedPwd) {
    return bcrypt_1.default.compareSync(plainPwd, hashedPwd);
}
exports.comparePasswords = comparePasswords;
//# sourceMappingURL=AuthService.js.map
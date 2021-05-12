"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerDevice = exports.getToken = exports.verifyDevice = exports.getDeviceState = void 0;
const device_1 = require("../models/mongo/device");
const AuthService_1 = require("./AuthService");
const device_2 = require("../models/mongo/device");
/**Connection to the DB to get the state of the device*/
function getDeviceState(token) {
}
exports.getDeviceState = getDeviceState;
// check if token password and real password are the same
function verifyDevice(name, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const hashedPwd = (yield device_1.getDevice(name)).password;
        return AuthService_1.comparePasswords(password, hashedPwd);
    });
}
exports.verifyDevice = verifyDevice;
function getToken(name, password) {
    return __awaiter(this, void 0, void 0, function* () {
        let token = "";
        if (yield verifyDevice(name, password)) {
            token = (yield device_1.getDevice(name)).token;
        }
        return token;
    });
}
exports.getToken = getToken;
function registerDevice(params) {
    return __awaiter(this, void 0, void 0, function* () {
        if (params.password1 != params.password2) {
            return false;
        }
        try {
            yield device_2.addDevice(params.name, params.password1);
            return true;
        }
        catch (err) {
            console.log("Fehler --> " + err);
            return false;
        }
    });
}
exports.registerDevice = registerDevice;
//# sourceMappingURL=deviceService.js.map
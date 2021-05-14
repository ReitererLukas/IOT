"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getDevice = exports.addDevice = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const AuthService_1 = require("../../services/AuthService");
const jwtDeviceService_1 = require("../../services/jwtDeviceService");
const DeviceSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    token: { type: String },
    state: { type: String }
}, { versionKey: false });
//generate Token
DeviceSchema.pre('save', function (next) {
    if (this.isModified("token")) {
        this.token = jwtDeviceService_1.createToken(this.name, this.password);
    }
    next(); // will call the next hook
});
//hash password
DeviceSchema.pre('save', function (next) {
    if (this.token == null) {
        next();
    }
    if (this.isModified("password")) {
        this.password = AuthService_1.hashPassword(this.password);
    }
    next();
});
// Export the model and return your IUser interface
const deviceModel = mongoose_1.default.model('device', DeviceSchema);
// Adds a device
function addDevice(name, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield deviceModel.create({
            name: name,
            password: password,
            token: null,
            state: 1
        });
    });
}
exports.addDevice = addDevice;
// Gets password of device (per name)
function getDevice(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const out = yield deviceModel.findOne({ name: name });
        if (out === null) {
            console.error("getPassword --> " + "Device-Name existiert bereits");
            throw Error;
        }
        if (out.errors) {
            console.error("getPassword --> " + out.errors.message);
            throw out.errors;
        }
        return out;
    });
}
exports.getDevice = getDevice;
//# sourceMappingURL=device.js.map
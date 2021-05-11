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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const AuthService_1 = require("../../services/AuthService");
const DeviceSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String },
}, { versionKey: false });
//hash password
DeviceSchema.pre('save', function (next) {
    if (this.isModified("password")) {
        this.password = AuthService_1.hashPassword(this.password);
    }
    next(); //will call the next callback
});
//generate Token
// Export the model and return your IUser interface
const deviceModel = mongoose_1.default.model('device', DeviceSchema);
function addUser(name, password) {
    deviceModel.create({
        name: name,
        password: password,
        token: null
    });
}
exports.default = addUser;
//# sourceMappingURL=device.js.map
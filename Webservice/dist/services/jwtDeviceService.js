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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = exports.createToken = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
function createToken(name, password) {
    return jwt.sign({ name: name, password: password }, config_1.default.jwt.secret);
}
exports.createToken = createToken;
function decodeToken(token) {
    try {
        if (!token || !token.startsWith("Bearer") || token.length < 7) {
            throw jwt.JsonWebTokenError;
        }
    }
    catch (err) {
        console.error("decodeToken1 --> " + err);
    }
    let tk = token.substr(7, token.length);
    try {
        return jwt.verify(tk, config_1.default.jwt.secret);
    }
    catch (err) {
        console.error("decodeToken2 --> " + err);
    }
}
exports.decodeToken = decodeToken;
//# sourceMappingURL=jwtDeviceService.js.map
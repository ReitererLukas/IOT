"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const webRouter = express_1.Router();
exports.default = () => {
    //http://localhost:5000
    webRouter.get("/", (req, res) => {
        res.sendFile(path_1.default.join(__dirname, "../../../web/start.html"));
    });
    webRouter.get("/device/register", (req, res) => {
        res.sendFile(path_1.default.join(__dirname, "../../../web/register.html"));
    });
    webRouter.get("/device/state", (req, res) => {
        res.sendFile(path_1.default.join(__dirname, "../../../web/state.html"));
    });
    return webRouter;
};
//# sourceMappingURL=index.js.map
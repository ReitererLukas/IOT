"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("../api"));
const config_1 = __importDefault(require("../config"));
exports.default = (app) => {
    app.use(express_1.default.json());
    // enable API Endpoints
    app.use(config_1.default.apiprefix, api_1.default());
    //http://localhost:5000/welcome
    app.get("/welcome", (req, res) => {
        res.send("welcome");
    });
};
//# sourceMappingURL=express.js.map
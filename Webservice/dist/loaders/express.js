"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("../api"));
const routes_1 = __importDefault(require("../web/routes"));
const config_1 = __importDefault(require("../config"));
exports.default = (app) => {
    app.use(express_1.default.json());
    // allows us to get parameters from post calls
    app.use(express_1.default.urlencoded({
        extended: true
    }));
    // enable API Endpoints
    app.use(config_1.default.apiprefix, api_1.default());
    app.use(routes_1.default());
};
//# sourceMappingURL=express.js.map
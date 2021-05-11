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
const express_1 = require("express");
const jwtDeviceService_1 = require("../../services/jwtDeviceService");
const deviceService_1 = require("../../services/deviceService");
const dRouter = express_1.Router();
exports.default = (app) => {
    app.use("/device", dRouter);
    //http://localhost:1234/api/device/state
    dRouter.get("/state", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        // site isn't available if token isn't set
        if (!req.headers.authorization) {
            res.send("not available1");
            res.status(511).send;
            return;
        }
        // gets Token
        const device = jwtDeviceService_1.decodeToken(req.headers.authorization);
        // checks if token is valid
        if (!device || !(yield deviceService_1.verifyDevice(device.name, device.password))) {
            res.send("not available2");
            res.status(511).send;
            return;
        }
        res.send("Get State for device");
    }));
    dRouter.post("/state", (req, res) => {
        res.send("Set State for device");
    });
    dRouter.get("/getToken", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req.body);
        if (Object.keys(req.body).length != 0) {
            let json = req.body;
            const token = yield deviceService_1.getToken(json.name, json.password);
            res.json({ token: token });
        }
        else {
            res.send("Get Token");
        }
    }));
    dRouter.get("/register", (req, res) => {
        res.send("Register Device");
    });
    dRouter.post("/register", (req, res) => {
        res.send("Register Device");
    });
};
//# sourceMappingURL=device.js.map
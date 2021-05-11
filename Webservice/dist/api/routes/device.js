"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dRouter = express_1.Router();
exports.default = (app) => {
    app.use("/device", dRouter);
    //http://localhost:1234/device/state
    dRouter.get("/state", (req, res) => {
        console.log(req.body);
        res.send("Get State for device");
    });
    dRouter.post("/state", (req, res) => {
        res.send("Set State for device");
    });
};
//# sourceMappingURL=device.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dUser = express_1.Router();
exports.default = (app) => {
    app.use("/user", dUser);
    //http://localhost:1234/user/login
    dUser.get("/login", (req, res) => {
        res.send("Login");
    });
    dUser.post("/login", (req, res) => {
        res.send("Login");
    });
    /**Register*/
    //http://localhost:1234/user/register
    dUser.get("/register", (req, res) => {
        res.send("Register");
    });
    dUser.post("/register", (req, res) => {
        res.send("Register");
    });
};
//# sourceMappingURL=user.js.map
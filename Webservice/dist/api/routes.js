"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoutes = exports.setUpMiddleWareRouter = void 0;
const express_1 = __importDefault(require("express"));
function setUpMiddleWareRouter(app) {
    app.use(express_1.default.json);
    createRoutes(app);
}
exports.setUpMiddleWareRouter = setUpMiddleWareRouter;
function createRoutes(app) {
    //http://localhost:1234/welcome
    app.get("/welcome", (req, res) => {
        res.send("welcome");
    });
    /**Device state*/
    //http://localhost:1234/device/state
    app.get("/device/state", (req, res) => {
        console.log(req.body);
        res.send("Get State for device");
    });
    app.post("/device/state", (req, res) => {
        res.send("Set State for device");
    });
    //
    //
    // /**Login*/
    // //http://localhost:1234/user/login
    // app.get("/user/login",(req,res)=> {
    //   res.send("Login");
    // });
    //
    // app.post("/user/login",(req,res)=> {
    //   res.send("Login");
    // });
    //
    // /**Register*/
    // //http://localhost:1234/user/register
    // app.get("/user/register",(req,res) => {
    //   res.send("Register");
    // });
    //
    // app.post("/user/register",(req,res) => {
    //   res.send("Register");
    // });
    //
}
exports.createRoutes = createRoutes;
//# sourceMappingURL=routes.js.map
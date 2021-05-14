import {Router} from "express";
import path from "path";

const webRouter: Router = Router();

export default () => {

  //http://localhost:5000
  webRouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../web/start.html"));
  });

  webRouter.get("/device/register", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../web/register.html"));
  });

  webRouter.get("/device/state", (req, res) => {
    res.sendFile(path.join(__dirname, "../../../web/state.html"));
  });

  return webRouter;
}
import {Router} from "express";
import {decodeToken} from "../../services/jwtDeviceService";
import {verifyDevice, getToken} from "../../services/deviceService";
import path from "path";
import {registerDevice} from "../../services/deviceService";
import {getDevice} from "../../models/mongo/device";

const dRouter: Router = Router();

export default (app: Router) => {
  app.use("/device", dRouter);


  //http://localhost:1234/api/device/state
  dRouter.get("/state", async (req, res) => {

    // site isn't available if token isn't set
    if (!req.headers.authorization) {
      res.send("not available1");
      res.status(511).send;
      return;
    }

    // gets Token
    const token = decodeToken(req.headers.authorization) as {name: string, password: string, iat: string};

    // checks if token is valid
    if (!token || !await verifyDevice(token.name, token.password)) {
      res.send("not available2");
      res.status(511).send;
      return;
    }

    const device = await getDevice(token.name);
    res.json({state:device.state});
  });


  dRouter.get("/token", async (req, res) => {
    if (Object.keys(req.body).length != 0) {
      let json = (req.body as { name: string, password: string });
      const token = await getToken(json.name, json.password);
      res.json({token: token});
    } else {
      res.send("Get Token");
    }
  });

  dRouter.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname,"../../../web/register.html"));
  });

  dRouter.post("/register",async (req, res) => {
    if(await registerDevice(req.body)) {
      res.sendFile(path.join(__dirname,"../../../web/success.html"));
    }
    else {
      res.sendFile(path.join(__dirname,"../../../web/error.html"));
    }
  });

}
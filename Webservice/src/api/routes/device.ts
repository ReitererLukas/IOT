import {Router} from "express";

const dRouter: Router = Router();

export default (app: Router) => {
  app.use("/device",dRouter);


  //http://localhost:1234/device/state
  dRouter.get("/state",(req, res)=>{
    console.log(req.body);
    res.send("Get State for device");
  });

  dRouter.post("/state",(req,res) => {
    res.send("Set State for device");
  });
}
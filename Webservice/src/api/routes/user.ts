import {Router} from "express";

const dUser: Router = Router();

export default (app: Router) => {
  app.use("/user",dUser);

  //http://localhost:1234/api/user/login
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

}
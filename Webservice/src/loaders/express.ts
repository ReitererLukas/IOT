import express from "express";
import routes from "../api";
import config from "../config";

export default (app: express.Application) => {
  app.use(express.json());

  // enable API Endpoints
  app.use(config.apiprefix, routes());

  //http://localhost:5000/welcome
  app.get("/welcome",(req,res)=>{
    res.send("welcome");
  });
}
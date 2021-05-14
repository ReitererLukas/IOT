import express from "express";
import routes from "../api";
import config from "../config";
import path from "path";

export default (app: express.Application) => {
  app.use(express.json());

  // allows us to get parameters from post calls
  app.use(express.urlencoded({
    extended: true
  }));

  // enable API Endpoints
  app.use(config.apiprefix, routes());

  //http://localhost:5000
  app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../../web/start.html"));
  });
}
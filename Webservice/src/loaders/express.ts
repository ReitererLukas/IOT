import express from "express";
import apiRoutes from "../api";
import webRoutes from "../web/routes";
import config from "../config";
import path from "path";

export default (app: express.Application) => {
  app.use(express.json());

  // allows us to get parameters from post calls
  app.use(express.urlencoded({
    extended: true
  }));

  // enable API Endpoints
  app.use(config.apiprefix, apiRoutes());
  app.use(webRoutes());


}
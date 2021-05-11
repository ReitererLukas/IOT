import expressLoader from "./express";
import mongooseLoader from "./mongoose";
import express from "express";

export default async (expressApp: express.Application) => {

  expressLoader(expressApp);
  await mongooseLoader();
}
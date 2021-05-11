import mongoose from "mongoose";
import config from "../config";
import {format as f} from "util";

export default async() => {
  const url: string = f('mongodb://%s:%s@%s:%s/%s?authMechanism=%s',
    config.database.user, config.database.password, config.database.host, config.database.port, config.database.name, config.database.authMechanism);

  await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.info("MongoDB Successfully connected!");
  }).catch(err => {
    console.error(err);
    return process.exit(1)
  });
}
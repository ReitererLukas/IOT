import express from 'express';
import config from "./config";
import load from "./loaders";
import {addDevice} from "./models/mongo/device";

const app: express.Application = express();

async function main() {
  await load(app);

  app.listen(config.port, () => {
    return console.info(`Express is listening on http://localhost:${config.port}/welcome`);
  }).on('error', function (err) {
    console.log(err)
  });

  /**Create Test Data*/
  // for(let i = 0;i<10;i++){
  //   console.log("Created"+i);
  //   addDevice(`Device${i}`,`password${i}`);
  // }
}

main();

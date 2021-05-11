import express, {Router} from 'express';
import device from "./routes/device";
import user from "./routes/user";

export default () => {
  const app: Router = Router()
  device(app);
  return app;
}

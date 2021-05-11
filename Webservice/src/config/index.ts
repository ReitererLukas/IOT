import {config} from 'dotenv';

config();

export default {
  port: parseInt(process.env.webport),
  apiprefix: process.env.apiprefix,

  database: {
    name: process.env.dbname,
    user: process.env.dbuser,
    password: process.env.dbpassword,
    host: process.env.dbhost,
    port: parseInt(process.env.dbport),
    authMechanism: process.env.dbauthMechanism
  },

  auth: {
    salt: parseInt(process.env.salt)
  },

  jwt: {
    secret: process.env.secret,
  }
};

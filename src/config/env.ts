import * as dotenv from "dotenv";
dotenv.config();

const config = {
  isProduction: false || process.env.isProduction,
  mongoDbUrl: 'mongodb://localhost/oauth_server' || process.env.mongoDbUrl,
  salt: 'a5828e9d6052dc3b14a93e07a5932dd9' || process.env.salt,
  PORT: parseInt(process.env.PORT as string, 10)
};

export default config;

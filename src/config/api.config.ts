import express from "express";
import cors from "cors";
import * as winston from "winston";
import * as expressWinston from "express-winston";
import session from "express-session";
import passport from "passport";
import passportGithub from "passport-github";

import { CommonRoutesConfig } from "../shared/utils/common_routes.config";
import { AuthRoutes } from "../context/support/auth/application/auth.routes";
import { CustomerRoutes } from "../context/core/customers/application/customer.routes";
import { MongoDBAL } from "../shared/persistence/data/data_sources/external/mongodb/mongodb.dbal";
import debug from "debug";

import config from "./env";

const api: express.Application = express();

if (!config.PORT) {
  console.log(`Error to get ports`);
  process.exit(1);
}

const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug("api");
//---------------- CONNECT TO DATABASE(MONGODB) -----------------------
const dbal: MongoDBAL = MongoDBAL.getInstance();
dbal.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

//---------------- SECURITY WITH OAUTH2 -----------------------
// Middlewares
api.use(
  session({
    secret: "SECRET",
    cookie: {
      maxAge: 60000 * 60 * 24, // 1 day
      // secure: true
    },
    saveUninitialized: false,
    resave: false,
    name: "test-seguros-bolivar"
  })
);
api.use(passport.initialize());
api.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj: any, done) => {
  done(null, obj);
});

passport.use(new passportGithub.Strategy({
  clientID: `${process.env.GITHUB_CLIENT_ID}`,
  clientSecret: `${process.env.GITHUB_CLIENT_SECRET}`,
  callbackURL: `http://localhost:${config.PORT}/auth/github/callback`,
  //scope:["",""],
  passReqToCallback: true
},
 (request: express.Request, _accessToken: string, _refreshToken: string, profile: passportGithub.Profile, done) => {
    try {
      /// Si se quisiera guardar información en Mongo DB del Usuario autenticado
      // const user = await User.findOne({ githubId: profile.id });

      //if (profile.id) return _done(null, profile);

      // const newUser = new User({
      //   discordId: profile.id,
      //   username: profile.username,
      //   guilds: profile.guilds,
      // });

      // const savedUser = await newUser.save();
      // done(null, savedUser);
      console.group('👾 Profile');
      console.info(` - ID::${profile.id}`);
      console.info(` - Provider::${profile.provider}`);
      console.info(` - Username::${profile.username}`);
      console.groupEnd();
     console.warn("ACCESS_TOKEN:", _accessToken);
      return done(null, profile);
      // User.findOrCreate({ githubId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
    } catch (error) {
      console.error(error);
      return done(null);
    }
  }
));



//---------------- JSON RULES -------------------------------
// Automatically allow cross-origin requests
api.use(cors({ origin: true }));

// Using req.body with POST Parameters to support
// JSON-encoded and URL-encoded bodies.
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

// here we are configuring the expressWinston logging middleware,
// which will automatically log all HTTP requests handled by Express.js
api.use(expressWinston.logger({
  transports: [
    new winston.transports.Console(),
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
}));

// here we are configuring the expressWinston error-logging middleware,
// which doesn't *handle* errors per se, but does *log* them
api.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console(),
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
}));

//----------------------- CONFIG ROUTE RULES --------------------------------
// here we are adding the UserRoutes to our array,
// after sending the Express.js apilication object to have the routes added to our api!

// endpoint index http://localhost:3000/
// api.get("/", (req: express.Request, res: express.Response) => {
//   let saludate = "<h1>Bienvenido a la API de Prueba _(🔅.🔅)_ !!!</h1>";
//   saludate += "</br>";
//   saludate += "<span>Por favor autenticarse en github para obtener los tokens de acceso.</span></br>";
//   saludate += `<a href="https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=http://localhost:3000/v1/auth/generate-token">`;
//   saludate += "Login with github";
//   saludate += "</a>";

//   res.status(200).send(saludate);
// });

routes.push(new AuthRoutes(api));
routes.push(new CustomerRoutes(api));

export default api;

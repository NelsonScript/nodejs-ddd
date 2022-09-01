import * as express from "express";
import passport from "passport";

import isLoggedIn from "../../../../shared/utils/middlewares/is_logged_in.middleware";
import status from "../../../../config/status";
import { CommonRoutesConfig } from "../../../../shared/utils/common_routes.config";
import { IndexController } from "./controller/index.controller";



class AuthRoutes extends CommonRoutesConfig {
  constructor(api: express.Application) {
    super(api, "AuthRoutes", "customer");
  }

  configureRoutes() {
    /// Index
    this.api.route('/')
      .get(isLoggedIn,
        (req: express.Request, res: express.Response, next:express.NextFunction) => {
          new IndexController().execute(req, res);
        });
    this.api.route("/auth/github")
      .get(passport.authenticate('github'));    
    /// Authorized    
    this.api.route("/auth/github/callback")
      .get(passport.authenticate('github', {
        failureRedirect: "/unauthorized", //other you could use are /forbiddent,/failure, etc
        successRedirect: "/readme",
      }));

    this.api.route("/readme")  
      .get((req: express.Request, res: express.Response) => {
       let saludate = "<h1>Bienvenido a la API de Prueba _(🔅.🔅)_ !!!</h1>";
        saludate += `Ingresa a <a href="http://localhost:3000/auth/github">Autenticar con cuenta de Github </a>`
        saludate += `Ingresa a los endpoints GET <a href="http://localhost:3000/v1/customers">Listar clientes </a>`
        saludate += `POST <a href="http://localhost:3000/v1/customers">Registrar un nuevo cliente </a>`
        saludate += "Ver la documentación comleta en el README"

      res.status(status.SUCCESS).send(saludate);
    });
    this.api.route("/unauthorized")
      .get((req: express.Request, res: express.Response) => {
      let message = "<h2>🚧  Unauthorized 🚷 </h2>";
      message += "</br>";
      message += "<h1>4️⃣0️⃣1️⃣</h1></br>";
      res.status(status.UNAUTHORIZED).send(message);
    });

    return this.api;
  }
 
}

export { AuthRoutes };

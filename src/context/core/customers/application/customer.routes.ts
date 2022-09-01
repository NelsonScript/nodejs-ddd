import * as express from "express";

import { CommonRoutesConfig } from "../../../../shared/utils/common_routes.config";
import GetCustomersController from "./controller/get_customers.controller";
import SaveCustomerController from "./controller/save_customer.controller";

import isLoggedIn from "../../../../shared/utils/middlewares/is_logged_in.middleware";

class CustomerRoutes extends CommonRoutesConfig {
  constructor(api: express.Application) {
    super(api, "CustomerRoutes", "customer");
  }

  configureRoutes() {
    this.api.route("/v1/customers")
      //Get All Customers
      .get(isLoggedIn,
      (req: express.Request, res: express.Response) => {
        new GetCustomersController().execute(req, res);
      });
    this.api.route("/v1/customer") 
      //Save a customer
      .post(isLoggedIn,
        (req: express.Request, res: express.Response) => {
          new SaveCustomerController().execute(req, res);
        });

    return this.api;
  }
  
}

export { CustomerRoutes };

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoutes = void 0;
const common_routes_config_1 = require("shared/utils/common_routes.config");
// import {GetContactByEmailHubspotV2Controller} from "../ddd/crm/use_cases/get_contact_crm_by_email/get_contact_crm_by_email.controller";
// import {FilterContactHubspotV3Controller} from "../ddd/crm/use_cases/filter_contact_crm/filter_contact_crm.controller";
// import {CreateContactHubspotV2Controller} from "../ddd/crm/use_cases/create_contact_crm/create_contact_hubspot_v2.controller";
// import {CreateContactHubspotV3Controller} from "../ddd/crm/use_cases/create_contact_crm/create_contact_hubspot_v3.controller";
class CustomerRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(api) {
        super(api, "CustomerRoutes", "customer");
    }
    configureRoutes() {
        // this.api.route("/v1/crm/customer/:email")
        //     .get((req: express.Request, res: express.Response) => {
        //       console.log("Customer1, Customer2, Customer3")
        //       //new GetContactByEmailHubspotV2Controller().execute(req, res);
        //     });
        // this.api.route("/v1/crm/hubspot/v3/contacts/prop/:prop/value/:value")
        //     .get((req: express.Request, res: express.Response) => {
        //       new FilterContactHubspotV3Controller().execute(req, res);
        //     });
        // this.api.route("/v1/crm/hubspot/v2/contact")
        //     .post((req: express.Request, res: express.Response) => {
        //       new CreateContactHubspotV2Controller().execute(req, res);
        //     });
        // this.api.route("/v1/crm/hubspot/v3/contact")
        //     .post((req: express.Request, res: express.Response) => {
        //       new CreateContactHubspotV3Controller().execute(req, res);
        //     });
        return this.api;
    }
}
exports.CustomerRoutes = CustomerRoutes;

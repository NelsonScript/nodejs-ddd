"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealCrmRoutes = void 0;
const common_routes_config_1 = require("../config/common.routes.config");
// import { CreateAppointmentCrmController } from "../modules/crm/use_cases/create_appointment_crm/create_appointment_crm.controller";
const read_deal_crm_controller_1 = require("../ddd/crm/use_cases/read_deal_crm/read_deal_crm.controller");
const create_deal_hubspot_v3_controller_1 = require("../ddd/crm/use_cases/create_deal_crm/create_deal_hubspot_v3.controller");
class DealCrmRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(api) {
        super(api, "DealCrmRoutes", "crm");
    }
    configureRoutes() {
        this.api.route("/v1/crm/deal/:id")
            .get((req, res) => {
            new read_deal_crm_controller_1.ReadDealCrmController().execute(req, res);
        });
        this.api.route("/v1/crm/hubspot/v3/deal")
            .post((req, res) => {
            new create_deal_hubspot_v3_controller_1.CreateDealHubspotV3Controller().execute(req, res);
        });
        return this.api;
    }
}
exports.DealCrmRoutes = DealCrmRoutes;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesCrmRoutes = void 0;
const common_routes_config_1 = require("../config/common.routes.config");
const read_a_property_crm_controller_1 = require("../ddd/crm/use_cases/read_a_property_crm/read_a_property_crm.controller");
class PropertiesCrmRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(api) {
        super(api, "PropertiesCrmRoutes", "turn");
    }
    configureRoutes() {
        this.api.route("/v1/crm/hubspot/v3/properties/hub/:hub/property/:property")
            .get((req, res) => {
            new read_a_property_crm_controller_1.ReadAPropertyCrmController().execute(req, res);
        });
        return this.api;
    }
}
exports.PropertiesCrmRoutes = PropertiesCrmRoutes;

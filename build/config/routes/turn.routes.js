"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnCrmRoutes = void 0;
const common_routes_config_1 = require("../config/common.routes.config");
const create_turn_crm_controller_1 = require("../ddd/crm/use_cases/create_turn_crm/create_turn_crm.controller");
class TurnCrmRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(api) {
        super(api, "TurnCrmRoutes", "turn");
    }
    configureRoutes() {
        this.api.route("/v1/crm/turn")
            .post((req, res) => {
            new create_turn_crm_controller_1.CreateTurnCrmController().execute(req, res);
        });
        // endpoint index http://localhost:5000/cva-web-production/us-central1/api/v1
        this.api.post("/v1/crm/turn/test", (req, res) => {
            console.log(req.body);
            res.status(200).send(req.body);
        });
        return this.api;
    }
}
exports.TurnCrmRoutes = TurnCrmRoutes;

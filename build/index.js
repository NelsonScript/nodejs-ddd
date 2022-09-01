"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const winston = __importStar(require("winston"));
const expressWinston = __importStar(require("express-winston"));
const customer_routes_1 = require("context/core/customers/application/customer.routes");
// import { DealCrmRoutes } from "./routes/deals_crm.routes";
// import { PropertiesCrmRoutes } from "./routes/properties_crm.routes";
// import { TurnCrmRoutes } from "./routes/turn.routes";
const debug_1 = __importDefault(require("debug"));
const api = (0, express_1.default)();
const port = 4000;
const routes = [];
const debugLog = (0, debug_1.default)("api");
// Automatically allow cross-origin requests
api.use((0, cors_1.default)({ origin: true }));
// Using req.body with POST Parameters to support
// JSON-encoded and URL-encoded bodies.
api.use(express_1.default.json());
api.use(express_1.default.urlencoded({ extended: true }));
// here we are configuring the expressWinston logging middleware,
// which will automatically log all HTTP requests handled by Express.js
api.use(expressWinston.logger({
    transports: [
        new winston.transports.Console(),
    ],
    format: winston.format.combine(winston.format.colorize(), winston.format.json()),
}));
// here we are adding the UserRoutes to our array,
// after sending the Express.js apilication object to have the routes added to our api!
routes.push(new customer_routes_1.CustomerRoutes(api));
// routes.push(new DealCrmRoutes(api));
// routes.push(new PropertiesCrmRoutes(api));
// routes.push(new TurnCrmRoutes(api));
// here we are configuring the expressWinston error-logging middleware,
// which doesn't *handle* errors per se, but does *log* them
api.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console(),
    ],
    format: winston.format.combine(winston.format.colorize(), winston.format.json()),
}));
// endpoint index http://localhost:5000/cva-web-production/us-central1/api/
api.get("/", (req, res) => {
    const saludate = "<h1>Hey!! you are in test index from hook turn _(🔅.🔅)_ !!!</h1>";
    res.status(200).send(saludate);
});
api.listen(port, () => {
    console.log(`⚠️ Servers from TS running at http://localhost:${port} but out port::3000 (🔅_🔅)`);
    debugLog(`⚠️ Servers from TS => running at http://localhost:${port}`);
    // routes.forEach((route: CommonRoutesConfig) => {
    //   debugLog(`Routes configured for ${route.getName()}`);
    // });
});
//exports.api = functions.https.onRequest(api);
//export { api };

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesHubspotV3Repo = void 0;
/* eslint-disable valid-jsdoc */
const hs = __importStar(require("@hubspot/api-client"));
// import { Filter, FilterGroup, PublicObjectSearchRequest } from "@hubspot/api-client/lib/codegen/crm/contacts";
class PropertiesHubspotV3Repo {
    _hubspot;
    constructor(token) {
        this._hubspot = new hs.Client({ apiKey: token });
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async associateWithObject(dealId, contactId) {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return new Promise(() => { });
    }
    async create(simplePublicObjectInput) {
        return this._hubspot.crm.deals.basicApi.create(simplePublicObjectInput);
    }
    /**
     * Trae la información de una propiedad de Hubspot API.
     // eslint-disable-next-line max-len
     * @param params Este objeto tiene dos propriedades objectType que es el hub de hubspot(contacts, deals, properties, tickets)
      y propertyName cualquiera de las propiedades de una instancia de hubspot
     * @return Option array
     */
    async read(params) {
        const apiResponse = await this._hubspot.crm.properties.coreApi.getByName(params.objectType, params.propertyName, false);
        console.log(JSON.stringify(apiResponse, null, 2));
        return apiResponse.options;
    }
    async update() {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return new Promise(() => { });
    }
    async delete() {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return new Promise(() => { });
    }
}
exports.PropertiesHubspotV3Repo = PropertiesHubspotV3Repo;

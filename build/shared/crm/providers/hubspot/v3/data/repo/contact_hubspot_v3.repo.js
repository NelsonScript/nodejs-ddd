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
exports.ContactHubspotV3Repo = void 0;
const hs = __importStar(require("@hubspot/api-client"));
// import { ContactHubspotV3Mapper } from "../../infra/mappers/contact_hubspot_v3.mapper";
const hubspot_config_1 = require("../../../../../../../config/hubspot.config");
const contacts_1 = require("@hubspot/api-client/lib/codegen/crm/contacts");
class ContactHubspotV3Repo {
    _hubspot;
    constructor(token) {
        this._hubspot = new hs.Client({ apiKey: token });
    }
    associateWithObject() {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return new Promise(() => { });
    }
    async filterBy(prop, value) {
        const publicObjectSearchRequest = new contacts_1.PublicObjectSearchRequest;
        const filterObj = new contacts_1.Filter();
        filterObj.propertyName = prop;
        filterObj.value = value;
        filterObj.operator = "EQ";
        const filterGroupObj = new contacts_1.FilterGroup();
        filterGroupObj.filters = [filterObj];
        publicObjectSearchRequest.filterGroups = [filterGroupObj];
        const contactResponse = await this._hubspot.crm.contacts.searchApi.doSearch(publicObjectSearchRequest);
        return contactResponse.results;
        // return this._contactMapper.toPersistence(contactResponse);
    }
    async create(simplePublicObject) {
        return this._hubspot.crm.contacts.basicApi.create(simplePublicObject);
    }
    async createOrUpdated(propToFilter, valueToFilter, contact) {
        const searchContactPromise = await this.filterBy(propToFilter, valueToFilter);
        contact.properties.hs_legal_basis = searchContactPromise.length === 0 ? hubspot_config_1.BaseLegal.INTERES_LEGITIMO_LEAD : hubspot_config_1.BaseLegal.INTERES_LEGITIMO_CLIENTE;
        const contactSaved = searchContactPromise.length === 0 ? this.create(contact) : this.update(searchContactPromise[0].id, contact);
        return contactSaved;
    }
    async read() {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return new Promise(() => { });
    }
    async update(id, simplePublicObjectInput) {
        return this._hubspot.crm.contacts.basicApi.update(id, simplePublicObjectInput);
    }
    async delete() {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return new Promise(() => { });
    }
}
exports.ContactHubspotV3Repo = ContactHubspotV3Repo;

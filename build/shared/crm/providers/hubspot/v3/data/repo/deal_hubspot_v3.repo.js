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
exports.DealHubspotV3Repo = void 0;
const hs = __importStar(require("@hubspot/api-client"));
// import { Filter, FilterGroup, PublicObjectSearchRequest } from "@hubspot/api-client/lib/codegen/crm/contacts";
class DealHubspotV3Repo {
    _hubspot;
    constructor(token) {
        this._hubspot = new hs.Client({ apiKey: token });
    }
    async associateWithObject(dealId, contactId) {
        return this._hubspot.crm.deals.associationsApi.create(dealId, "contacts", contactId, "deal_to_contacts");
    }
    // async filterBy(prop: string, value: any): Promise<any> {
    //   const publicObjectSearchRequest = new PublicObjectSearchRequest;
    //   const filterObj = new Filter();
    //   filterObj.propertyName = prop;
    //   filterObj.value = value;
    //   filterObj.operator = "EQ";
    //   const filterGroupObj = new FilterGroup();
    //   filterGroupObj.filters = [filterObj];
    //   publicObjectSearchRequest.filterGroups = [filterGroupObj];
    //   const contactResponse = await this._hubspot.crm.contacts.searchApi.doSearch(publicObjectSearchRequest);
    //   return contactResponse;
    //   //return this._contactMapper.toPersistence(contactResponse);
    // }
    async create(simplePublicObjectInput) {
        return this._hubspot.crm.deals.basicApi.create(simplePublicObjectInput);
    }
    async read() {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return new Promise(() => { });
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
exports.DealHubspotV3Repo = DealHubspotV3Repo;

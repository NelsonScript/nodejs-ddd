"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactHubspotV2Repo = void 0;
const hubspot_1 = __importDefault(require("hubspot"));
const contact_hubspot_v2_mapper_1 = require("../../domain/mappers/contact_hubspot_v2.mapper");
class ContactHubspotV2Repo {
    _hubspot;
    _contactMapper = new contact_hubspot_v2_mapper_1.ContactHubspotV2Mapper();
    constructor(token) {
        this._hubspot = new hubspot_1.default({ apiKey: token });
    }
    associateWithObject() {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        return new Promise(() => { });
    }
    async getContactByEmail(_email) {
        const contactRequestPromise = await this._hubspot.contacts.getByEmail(_email);
        return this._contactMapper.toPersistence(contactRequestPromise.properties);
    }
    async create(contact) {
        return this._hubspot.contacts
            .createOrUpdate(contact.email, this._contactMapper.toDTO(contact));
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
exports.ContactHubspotV2Repo = ContactHubspotV2Repo;

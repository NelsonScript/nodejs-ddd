"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonRoutesConfig = void 0;
class CommonRoutesConfig {
    api;
    name;
    prefix;
    constructor(api, name, prefix) {
        this.api = api;
        this.name = name;
        this.prefix = prefix;
        this.configureRoutes();
    }
    getName() {
        return this.name;
    }
}
exports.CommonRoutesConfig = CommonRoutesConfig;

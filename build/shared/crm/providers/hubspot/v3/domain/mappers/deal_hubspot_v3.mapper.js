"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealHubspotV3Mapper = void 0;
class DealHubspotV3Mapper {
    toDTO = (deal) => {
        return {
            properties: {
                "closedate": deal.closedate,
                "dealname": deal.dealname,
                "dealstage": deal.dealstage,
                "id": deal.id,
                "pipeline": deal.pipeline,
            },
        };
    };
}
exports.DealHubspotV3Mapper = DealHubspotV3Mapper;

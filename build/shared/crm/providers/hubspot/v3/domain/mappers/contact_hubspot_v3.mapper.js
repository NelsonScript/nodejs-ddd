"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactHubspotV3Mapper = void 0;
class ContactHubspotV3Mapper {
    static toSimplePublicObject = (contact) => {
        return {
            "id": contact.id,
            "properties": {
                "address": contact.address ? contact.address : "",
                "hs_legal_basis": contact.baseLegal ? contact.baseLegal : "",
                "date_of_birth": contact.dateOfBirth,
                "firstname": contact.firstname,
                "lastname": contact.lastname,
                "tipo_de_documento": contact.documentType,
                "email": contact.email ? contact.email : "",
                "evento_realizado_por_prospecto": contact.evento ? contact.evento : "",
                "hs_analytics_source": contact.fuenteOriginal ? contact.fuenteOriginal : "",
                "hs_lead_status": contact.leadStatus ? contact.leadStatus : "",
                "lead_scoring": contact.leadScoring ? contact.leadScoring : "",
                "lifecyclestage": contact.lifeCycleStage ? contact.lifeCycleStage : "",
                "n_mero_de_documento": contact.identificationNumber,
                "n_mero_de_tel_fono_celular": contact.mobilePhone,
                // "mobilephone": contact.mobilePhone,
                "phone": contact.phone,
                "photo": contact.photo,
                "respuesta_a_evento": contact.respuestaEvento,
                "hs_content_membership_status": contact.status ? contact.status : "",
            },
            "createdAt": new Date(),
            "updatedAt": new Date(),
        };
    };
    static fromJSON(contact) {
        return {
            id: contact.id ? contact.id : "",
            address: contact.address ? contact.address : "",
            baseLegal: contact.baseLegal ? contact.baseLegal : "",
            documentType: contact.documentType ? contact.documentType : "",
            dateOfBirth: contact.date_of_birth ? contact.date_of_birth : "",
            email: contact.email ? contact.email : "",
            evento: contact.evento_realizado_por_prospecto ? contact.evento_realizado_por_prospecto : "",
            firstname: contact.firstname ? contact.firstname : "",
            identificationNumber: contact.numero_de_documento ? contact.numero_de_documento : "",
            fuenteOriginal: contact.hs_analytics_source ? contact.hs_analytics_source : "",
            lastname: contact.lastname ? contact.lastname : "",
            leadScoring: contact.leadScoring ? contact.leadScoring : "",
            leadStatus: contact.leadStatus ? contact.leadStatus : "",
            lifeCycleStage: contact.lifeCycleStage ? contact.lifeCycleStage : "",
            phone: contact.phone ? contact.phone : "",
            photo: contact.photo ? contact.photo : "",
            mobilePhone: contact.phone ? contact.phone : "",
            respuestaEvento: contact.respuestaEvento ? contact.respuestaEvento : "",
            status: contact.status ? contact.status : "",
        };
    }
    // public static toDTO(vinyl: Vinyl): ContactCRMDTO {
    //   return {
    //     firstname: vinyl.albumName.value,
    //     lastname: vinyl.Label.name.value,
    //     email: vinyl.Label.country.value,
    //     identificationNumber: vinyl.yearReleased.value,
    //     mobilePhone: vinyl.Genres.map((g) => g.name),
    //   };
    // }
    static toPersistence(contact) {
        return {
            id: contact.id ? contact.id : "",
            address: contact.properties.address ? contact.properties.address : "",
            baseLegal: contact.properties.baseLegal ? contact.properties.baseLegal : "",
            documentType: contact.properties.documentType ? contact.properties.documentType : "",
            dateOfBirth: contact.properties.date_of_birth ? contact.properties.date_of_birth : "",
            email: contact.properties.email ? contact.properties.email : "",
            evento: contact.properties.evento_realizado_por_prospecto ? contact.properties.evento_realizado_por_prospecto : "",
            firstname: contact.properties.firstname ? contact.properties.firstname : "",
            identificationNumber: contact.properties.numero_de_documento ? contact.properties.numero_de_documento : "",
            fuenteOriginal: contact.properties.hs_analytics_source ? contact.properties.hs_analytics_source : "",
            lastname: contact.properties.lastname ? contact.properties.lastname : "",
            leadScoring: contact.properties.leadScoring ? contact.properties.leadScoring : "",
            leadStatus: contact.properties.leadStatus ? contact.properties.leadStatus : "",
            lifeCycleStage: contact.properties.lifeCycleStage ? contact.properties.lifeCycleStage : "",
            phone: contact.properties.phone ? contact.properties.phone : "",
            photo: contact.properties.photo ? contact.properties.photo : "",
            mobilePhone: contact.properties.phone ? contact.properties.phone : "",
            respuestaEvento: contact.properties.respuestaEvento ? contact.properties.respuestaEvento : "",
            status: contact.properties.status ? contact.properties.status : "",
        };
    }
}
exports.ContactHubspotV3Mapper = ContactHubspotV3Mapper;

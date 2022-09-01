"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactHubspotV2Mapper = void 0;
class ContactHubspotV2Mapper {
    toDTO = (contact) => {
        return {
            properties: [
                { property: "address", value: contact.address },
                { property: "date_of_birth", value: contact.dateOfBirth },
                { property: "firstname", value: contact.firstname },
                { property: "lastname", value: contact.lastname },
                { property: "tipo_de_documento", value: contact.documentType },
                { property: "email", value: contact.email ? contact.email : "" },
                // { property: "n_mero_de_documento", value: contact.identificationNumber },
                { property: "numero_de_documento", value: contact.identificationNumber },
                // { property: "n_mero_de_tel_fono_celular", value: contact.mobilePhone },
                { property: "mobilephone", value: contact.mobilePhone },
                { property: "phone", value: contact.phone },
                { property: "photo", value: contact.photo },
            ],
        };
    };
    // public static toDTO(vinyl: Vinyl): ContactCRMDTO {
    //   return {
    //     firstname: vinyl.albumName.value,
    //     lastname: vinyl.Label.name.value,
    //     email: vinyl.Label.country.value,
    //     identificationNumber: vinyl.yearReleased.value,
    //     mobilePhone: vinyl.Genres.map((g) => g.name),
    //   };
    // }
    toPersistence(contact) {
        return {
            id: contact.hs_object_id ? contact.hs_object_id.value : 0,
            address: contact.address ? contact.address.value : "",
            documentType: contact.documentType ? contact.documentType.value : "",
            email: contact.email ? contact.email.value : "",
            firstname: contact.firstname ? contact.firstname.value : 0,
            identificationNumber: contact.identificationNumber ? contact.identificationNumber.value : 0,
            lastname: contact.lastname ? contact.lastname.value : "",
            mobilePhone: contact.phone ? contact.phone.value : 0,
        };
    }
}
exports.ContactHubspotV2Mapper = ContactHubspotV2Mapper;

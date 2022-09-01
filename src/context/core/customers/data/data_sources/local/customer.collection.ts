import { CustomerEntity } from "../../../../../../shared/persistence/domain/entities/customer.entity";

const customers: CustomerEntity[] = [
  {
    id: 1,
    documentType: "CC",
    name:"Jose Jimenez",
    numberId: 77441122
  },
  {
    id: 2,
    documentType: "CC",
    name:"Maria Romero",
    numberId: 313752000
  },
  {
    id: 3,
    documentType: "CE",
    name: "Ignacio Villa",
    numberId: 523322121
  },
  {
    id: 4,
    documentType: "CC",
    name: "Rosalba Gomez",
    numberId: 31255422
  },
  {
    id: 6,
    documentType: "CC",
    name: "Luis Hernandez",
    numberId: 10010055336
  }
  
];

export { customers };
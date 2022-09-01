
import { CustomerEntity } from '../../../../../shared/persistence/domain/entities/customer.entity';
import MongoDBDS from "../../../../../shared/persistence/data/data_sources/external/mongodb/mongodb.ds";
//import { CustomerLocal } from "../data_sources/local/customer.local";
import customerModel from "../data_sources/external/models/customer.model";

class CustomerRepository{

  private db: MongoDBDS<any>;

  constructor(){
    this.db = new MongoDBDS(customerModel);
  }

  async create(data:any): Promise<boolean> {
    return this.db.create(data);
  }

  async find(): Promise<CustomerEntity[]> {
    return this.db.find();
  }
 
}

export { CustomerRepository };


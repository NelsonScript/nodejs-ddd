import * as express from "express";
import { MongoClient } from "mongodb";
import { BaseController } from "../../../../../shared/utils/base.controller";
import { CustomerEntity } from "../../../../../shared/persistence/domain/entities/customer.entity";
import { CustomerRepository } from "../../data/repositories/customers.repository";


class SaveCustomerController extends BaseController {

  private customerRepository: CustomerRepository = new CustomerRepository();

  protected async executeImpl(req: express.Request, res: express.Response): Promise<void | any> {
    try {
      let customer = await this.customerRepository.create(req.body.data);
      return this.ok<any>(res, customer); 
    } catch (error: any) {
      this.fail(res, error.message);
    }
  }
}

export default SaveCustomerController;



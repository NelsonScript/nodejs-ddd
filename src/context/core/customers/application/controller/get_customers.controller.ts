import * as express from "express";
import { BaseController } from "../../../../../shared/utils/base.controller";
import { CustomerRepository } from "../../data/repositories/customers.repository";
//import { customers } from "../../data/data_sources/local/customer.collection";
import { CustomerEntity } from "../../../../../shared/persistence/domain/entities/customer.entity";

class GetCustomersController extends BaseController {

  private customerRepository: CustomerRepository = new CustomerRepository();

  protected async executeImpl(req: express.Request, res: express.Response): Promise<void | any> {
    try {
      let allCustomers:CustomerEntity[] = await this.customerRepository.find();
      return this.ok<any>(res, allCustomers);
    } catch (error: any) {
      this.fail(res, error.message);
    }
  }
}

export default GetCustomersController;

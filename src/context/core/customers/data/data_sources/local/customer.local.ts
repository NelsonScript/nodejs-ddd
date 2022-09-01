import { IRead } from "../../../../../../shared/persistence/data/repositories/i_read.repository";
import { IWrite } from "../../../../../../shared/persistence/data/repositories/i_write.repository";

abstract class CustomerLocal<CustomerEntity> implements IRead<CustomerEntity>, IWrite<CustomerEntity>{

  private data : CustomerEntity[];

  constructor(collection:CustomerEntity[]){
    this.data = collection
  }

  async find(): Promise<CustomerEntity[]> {
    try{
      return this.data;
    } 
    catch(err){
      throw new Error('Problems with customer class');
    } 
  };

  async findOne(id: number): Promise<CustomerEntity>{
    // try {
    //   return { id: 10, documentType: "CC", name:"", numberId:5665456456} as CustomerEntity;
    // }
    // catch (err) {
      throw new Error('Problems with customer class');
    //} 
  }

  async create(item: CustomerEntity): Promise<boolean> {
    try {
      this.data.push(item);
      return true;
    }
    catch (err) {
      throw new Error('Problems with customer class');
    } 
    return false;
  }
  async update(id: string, item: any): Promise<boolean> {
    try {
      const exist = (element: any) => element.id === item.id;
      let index = this.data.findIndex(exist);
      
      if (index > 0 || index == 0) {
        this.data[index] = item;
      }
      return true;
    }
    catch (err) {
      throw new Error('Problems with customer class');
    }
  
  }

  async delete(id: number): Promise<boolean> {
    try {
      const exist = (element: any) => element.id === id;
      let index = this.data.findIndex(exist);

      if (index > 0 || index == 0) {
        this.data.splice(index, 1);
      }
      return true;
    }
    catch (err) {
      throw new Error('Problems with customer class');
    }
    
  }



}

export {CustomerLocal};

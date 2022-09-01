interface IWriteRepository<T> {
  create(item: T): Promise<boolean>;
  update(id: any, item: T): Promise<boolean>;
  delete(id: any): Promise<boolean>;
}

export default IWriteRepository;

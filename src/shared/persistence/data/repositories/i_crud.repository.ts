
import IReadRepository from "./i_read.repository";
import IWriteRepository from "./i_write.repository";

interface ICRUDRepository<T> extends IReadRepository<T>, IWriteRepository<T>{}

export default ICRUDRepository;

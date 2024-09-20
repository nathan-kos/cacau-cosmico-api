import { IRepository } from '@shared/interfaces/Repository';
import { CreatePedidoCupomDTO } from '../DTO/CreatePedidoCupomDTO';
import { PedidoCupom } from '../entitie/PedidoCupom';

interface IPedidoCupomRepository
  extends IRepository<PedidoCupom, CreatePedidoCupomDTO, null> {}

export { IPedidoCupomRepository };

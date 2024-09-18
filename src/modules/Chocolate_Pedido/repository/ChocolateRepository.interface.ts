import { IRepository } from '@shared/interfaces/Repository';
import { ICreateChocolatePedidoDTO } from '../DTO/CreateChocolatePedidoDTO';
import { ChocolatePedido } from '../entitie/ChocolatePedido';

interface IChocolatePedidoRepository
  extends IRepository<ChocolatePedido, ICreateChocolatePedidoDTO, null> {}

export { IChocolatePedidoRepository };

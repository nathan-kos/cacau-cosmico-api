import { IRepository } from '@shared/interfaces/Repository';
import { CreatePedidoDTO } from '../DTO/CreatePedidoDTO';
import { createWithDate } from '../DTO/CreateWithDateDTO';
import { UpdatePedidoDTO } from '../DTO/UpdatePedidoDTO';
import { Pedido } from '../entitie/Pedido';

interface IPedidoRepository
  extends IRepository<Pedido, CreatePedidoDTO, UpdatePedidoDTO> {
  ListByDate(initialDate: Date, finalDate: Date): Promise<Pedido[]>;
  createWithDate(data: createWithDate): Promise<Pedido>;
}

export { IPedidoRepository };

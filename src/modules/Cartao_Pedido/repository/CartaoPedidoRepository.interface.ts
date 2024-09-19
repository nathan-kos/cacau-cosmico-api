import { IRepository } from '@shared/interfaces/Repository';
import { CreateCartaoPedidoDTO } from '../DTO/CreateCartaoPedidoDTO';
import { CartaoPedido } from '../entitie/CartaoPedido';

interface ICartaoPedidoRepository
  extends IRepository<CartaoPedido, CreateCartaoPedidoDTO, null> {}

export { ICartaoPedidoRepository };

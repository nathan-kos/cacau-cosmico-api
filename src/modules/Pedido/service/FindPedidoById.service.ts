import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { inject, injectable } from 'tsyringe';
import { Pedido } from '../entitie/Pedido';
import { PedidoRepository } from '../repository/PedidoRepository';

@injectable()
class findPedidoByIdService {
  constructor(
    @inject('PedidoRepository')
    private pedidoRepository: PedidoRepository,
  ) {}

  async execute(ped_Id: string): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findBy({
      ped_Id,
    });

    if (!pedido) {
      throw new EntityNotFoundError('Pedido não encontrado');
    }

    return pedido;
  }
}

export { findPedidoByIdService };

import { StatusPedido } from '@prisma/client';
import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { inject } from 'tsyringe';
import { Pedido } from '../entitie/Pedido';
import { PedidoRepository } from '../repository/PedidoRepository';

class AtualizarStatusPedidoService {
  constructor(
    @inject('PedidoRepository')
    private pedidoRepository: PedidoRepository,
  ) {}

  async execute(id: string, status: StatusPedido): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findBy({
      ped_Id: id,
    });

    if (!pedido) {
      throw new EntityNotFoundError('Pedido não encontrado');
    }

    pedido.ped_Status = status;

    return this.pedidoRepository.update(pedido);
  }
}

export { AtualizarStatusPedidoService };

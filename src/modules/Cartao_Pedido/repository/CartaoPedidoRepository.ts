import { prisma } from '@shared/database';
import { NotImplementedError } from '@shared/errors/NotImplementedError';
import { IPaginatedRequest } from '@shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '@shared/interfaces/IPaginatedResponse';
import { CreateCartaoPedidoDTO } from '../DTO/CreateCartaoPedidoDTO';
import { CartaoPedido } from '../entitie/CartaoPedido';
import { ICartaoPedidoRepository } from './CartaoPedidoRepository.interface';

class CartaoPedidoRepository implements ICartaoPedidoRepository {
  async create(entity: CreateCartaoPedidoDTO): Promise<CartaoPedido> {
    const cartaoPedido = await prisma.cartao_pedido.create({
      data: entity,
    });

    return cartaoPedido;
  }

  async findBy(partial: Partial<CartaoPedido>): Promise<CartaoPedido | null> {
    const data = await prisma.cartao_pedido.findFirst({
      where: partial,
    });

    return data;
  }

  async listBy({
    page = 1,
    limit = 10,
    filter,
  }: IPaginatedRequest<CartaoPedido>): Promise<
    IPaginatedResponse<CartaoPedido>
  > {
    const results = await prisma.cartao_pedido.findMany({
      where: filter,
      skip: (page - 1) * limit,
      take: limit,
    });

    const total = await prisma.cartao_pedido.count({
      where: filter,
    });

    return {
      results,
      total,
      page,
      limit,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  update(entity: null): Promise<CartaoPedido> {
    throw new NotImplementedError('Impossivel atualizar um cartão de pedido');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  delete(entity: CartaoPedido): Promise<void> {
    throw new NotImplementedError('Impossivel atualizar um cartão de pedido');
  }
}

export { CartaoPedidoRepository };

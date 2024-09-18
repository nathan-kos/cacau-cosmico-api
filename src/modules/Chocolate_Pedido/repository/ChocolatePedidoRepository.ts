/* eslint-disable no-unused-vars */
import { prisma } from '@shared/database';
import { NotImplementedError } from '@shared/errors/NotImplementedError';
import { IPaginatedRequest } from '@shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '@shared/interfaces/IPaginatedResponse';
import { ICreateChocolatePedidoDTO } from '../DTO/CreateChocolatePedidoDTO';
import { ChocolatePedido } from '../entitie/ChocolatePedido';
import { IChocolatePedidoRepository } from './ChocolateRepository.interface';

class ChocolatePedidoRepository implements IChocolatePedidoRepository {
  async create(entity: ICreateChocolatePedidoDTO): Promise<ChocolatePedido> {
    const data = await prisma.chocolate_pedido.create({
      data: entity,
    });

    return data;
  }

  async findBy(
    partial: Partial<ChocolatePedido>,
  ): Promise<ChocolatePedido | null> {
    const data = await prisma.chocolate_pedido.findFirst({
      where: partial,
    });

    return data;
  }

  async listBy({
    page = 1,
    limit = 10,
    filter,
  }: IPaginatedRequest<ChocolatePedido>): Promise<
    IPaginatedResponse<ChocolatePedido>
  > {
    const data = await prisma.chocolate_pedido.findMany({
      where: filter,
      take: limit,
      skip: (page - 1) * limit,
    });

    const total = await prisma.chocolate_pedido.count({
      where: filter,
    });

    return {
      results: data,
      total,
      page,
      limit,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(entity: null): Promise<ChocolatePedido> {
    throw new NotImplementedError('Impossivel atualizar um chocolate pedido');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delete(entity: ChocolatePedido): Promise<void> {
    throw new NotImplementedError('Impossivel deletar um chocolate pedido');
  }
}

export { ChocolatePedidoRepository };

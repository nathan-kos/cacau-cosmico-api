import { prisma } from '@shared/database';
import { IPaginatedRequest } from '@shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '@shared/interfaces/IPaginatedResponse';
import { CreatePedidoDTO } from '../DTO/CreatePedidoDTO';
import { UpdatePedidoDTO } from '../DTO/UpdatePedidoDTO';
import { Pedido } from '../entitie/Pedido';
import { IPedidoRepository } from './PedidoRepository.interface';

class PedidoRepository implements IPedidoRepository {
  async create(entity: CreatePedidoDTO): Promise<Pedido> {
    const pedido = await prisma.pedido.create({
      data: entity,
    });

    return pedido;
  }

  async findBy(partial: Partial<Pedido>): Promise<Pedido | null> {
    const data = await prisma.pedido.findFirst({
      where: partial,
    });

    return data;
  }

  async listBy({
    page = 1,
    limit = 10,
    filter,
  }: IPaginatedRequest<Pedido>): Promise<IPaginatedResponse<Pedido>> {
    const results = await prisma.pedido.findMany({
      where: filter,
      skip: (page - 1) * limit,
      take: limit,
    });

    const total = await prisma.pedido.count({
      where: filter,
    });

    return {
      results,
      total,
      page,
      limit,
    };
  }

  update(entity: UpdatePedidoDTO): Promise<Pedido> {
    const data = prisma.pedido.update({
      where: {
        ped_Id: entity.ped_Id,
      },
      data: entity,
    });

    return data;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  delete(entity: Pedido): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export { PedidoRepository };

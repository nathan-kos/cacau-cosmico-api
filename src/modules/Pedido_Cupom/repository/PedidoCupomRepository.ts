/* eslint-disable no-unused-vars */
import { prisma } from '@shared/database';
import { IPaginatedRequest } from '@shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '@shared/interfaces/IPaginatedResponse';
import { CreatePedidoCupomDTO } from '../DTO/CreatePedidoCupomDTO';
import { PedidoCupom } from '../entitie/PedidoCupom';
import { IPedidoCupomRepository } from './PedidoCupomRepository.interface';

class PedidoCupomRepository implements IPedidoCupomRepository {
  async create(entity: CreatePedidoCupomDTO): Promise<PedidoCupom> {
    const data = await prisma.pedido_cupom.create({
      data: entity,
    });

    return data;
  }

  async findBy(partial: Partial<PedidoCupom>): Promise<PedidoCupom | null> {
    const data = await prisma.pedido_cupom.findFirst({
      where: partial,
    });

    return data;
  }

  async listBy({
    page = 1,
    limit = 10,
    filter,
  }: IPaginatedRequest<PedidoCupom>): Promise<IPaginatedResponse<PedidoCupom>> {
    const data = await prisma.pedido_cupom.findMany({
      where: filter,
      take: limit,
      skip: (page - 1) * limit,
    });

    const total = await prisma.pedido_cupom.count({
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
  update(entity: null): Promise<PedidoCupom> {
    throw new Error('Method not implemented.');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delete(entity: PedidoCupom): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export { PedidoCupomRepository };

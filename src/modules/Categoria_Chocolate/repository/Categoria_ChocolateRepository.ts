import { prisma } from '@shared/database';
import { IPaginatedRequest } from '@shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '@shared/interfaces/IPaginatedResponse';
import { Categoria_Chocolate } from '../entitie/Categoria_Chocolate';
import { ICategoriaChocolateRepository } from './ICategoria_Chocolate.interface';

class Categoria_ChocolateRepository implements ICategoriaChocolateRepository {
  async findBy(
    partial: Partial<Categoria_Chocolate>,
  ): Promise<Categoria_Chocolate | null> {
    const data = await prisma.categoria_chocolate.findFirst({
      where: partial,
    });

    return data;
  }

  async listBy({
    page = 1,
    limit = 10,
    filter,
  }: IPaginatedRequest<Categoria_Chocolate>): Promise<
    IPaginatedResponse<Categoria_Chocolate>
  > {
    const data = await prisma.categoria_chocolate.findMany({
      where: filter,
      take: limit,
      skip: (page - 1) * limit,
    });

    const total = await prisma.categoria_chocolate.count({
      where: filter,
    });

    return {
      results: data,
      total,
      page,
      limit,
    };
  }
}

export { Categoria_ChocolateRepository };

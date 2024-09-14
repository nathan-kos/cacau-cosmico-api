import { prisma } from '@shared/database';
import { BadRequestError } from '@shared/errors/BadRequestError';
import { IPaginatedRequest } from '@shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '@shared/interfaces/IPaginatedResponse';
import { Chocolate } from '../entitie/chocolate';
import { IChocolateRepository } from './IChocolateRepository.interface';

class ChocolateRepository implements IChocolateRepository {
  async findBy(partial: Partial<Chocolate>): Promise<Chocolate | null> {
    const data = await prisma.chocolate.findFirst({
      where: partial,
    });

    return data;
  }

  async listBy({
    page = 1,
    limit = 10,
    filter,
  }: IPaginatedRequest<Chocolate>): Promise<IPaginatedResponse<Chocolate>> {
    const data = await prisma.chocolate.findMany({
      where: filter,
      take: limit,
      skip: (page - 1) * limit,
    });

    const total = await prisma.chocolate.count({
      where: filter,
    });

    return {
      results: data,
      total,
      page,
      limit,
    };
  }

  async listByNome({
    page = 1,
    limit = 10,
    filter,
  }: IPaginatedRequest<Chocolate>): Promise<IPaginatedResponse<Chocolate>> {
    if (!filter?.cho_Nome) {
      throw new BadRequestError('Nome do chocolate é obrigatório');
    }

    const data = await prisma.chocolate.findMany({
      where: {
        cho_Nome: {
          contains: filter.cho_Nome,
          mode: 'insensitive',
        },
      },
      take: limit,
      skip: (page - 1) * limit,
    });

    const total = await prisma.chocolate.count({
      where: {
        cho_Nome: {
          contains: filter.cho_Nome,
          mode: 'insensitive',
        },
      },
    });

    return {
      results: data,
      total,
      page,
      limit,
    };
  }
}

export { ChocolateRepository };

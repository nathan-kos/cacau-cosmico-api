import { prisma } from '@shared/database';
import { NotImplementedError } from '@shared/errors/NotImplementedError';
import { IPaginatedRequest } from '@shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '@shared/interfaces/IPaginatedResponse';
import { ICreateCupomDTO } from '../DTO/ICreateCupomDTO';
import { Cupom } from '../entitie/Cupom';
import { ICupomRepository } from './ICupomRepository.interface';

class CupomRepository implements ICupomRepository {
  async create(entity: ICreateCupomDTO): Promise<Cupom> {
    const cupom = await prisma.cupom.create({
      data: entity,
    });

    return cupom;
  }

  async findBy(partial: Partial<Cupom>): Promise<Cupom | null> {
    const data = await prisma.cupom.findFirst({
      where: partial,
    });

    return data;
  }

  async listBy({
    page = 1,
    limit = 10,
    filter,
  }: IPaginatedRequest<Cupom>): Promise<IPaginatedResponse<Cupom>> {
    const data = await prisma.cupom.findMany({
      where: filter,
      take: limit,
      skip: (page - 1) * limit,
    });

    const total = await prisma.cupom.count({
      where: filter,
    });

    return {
      results: data,
      total,
      page,
      limit,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  update(entity: null): Promise<Cupom> {
    throw new NotImplementedError('impossível atualizar cupom');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  delete(entity: Cupom): Promise<void> {
    throw new NotImplementedError('impossível deletar cupom');
  }
}

export { CupomRepository };

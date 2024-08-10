import { prisma } from '@shared/database';
import { NotImplementedError } from '@shared/errors/NotImplementedError';
import { IPaginatedRequest } from '@shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '@shared/interfaces/IPaginatedResponse';
import { ICreateCartaoDTO } from '../DTO/ICreateCartaoDTO';
import { Cartao } from '../entitie/Cartao';
import { ICartaoRepository } from './ICartaoRepository.interface';

class CartaoRepository implements ICartaoRepository {
  async create(entity: ICreateCartaoDTO): Promise<Cartao> {
    const cartao = await prisma.cartao.create({
      data: entity,
    });

    return cartao;
  }

  async findBy(partial: Partial<Cartao>): Promise<Cartao | null> {
    const cartao = await prisma.cartao.findFirst({
      where: partial,
    });

    return cartao;
  }

  async listBy({
    page = 1,
    limit = 10,
    filter,
  }: IPaginatedRequest<Cartao>): Promise<IPaginatedResponse<Cartao>> {
    const cartoes = await prisma.cartao.findMany({
      where: filter,
      skip: (page - 1) * limit,
      take: limit,
    });

    const total = await prisma.cartao.count({
      where: filter,
    });

    return {
      limit,
      page,
      results: cartoes,
      total,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  async update(entity: null): Promise<Cartao> {
    throw new NotImplementedError(
      'Impossivel atualizar um cartão, apenas deletar e criar um novo',
    );
  }

  async delete(entity: Cartao): Promise<void> {
    await prisma.cartao.delete({
      where: {
        car_Id: entity.car_Id,
      },
    });
  }
}

export { CartaoRepository };

import { prisma } from '@shared/database';
import { IPaginatedRequest } from '@shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '@shared/interfaces/IPaginatedResponse';
import { CreateTrocaDevolucaoDTO } from '../DTO/CreateTrocaDevolucaoDTO';
import { UpdateTrocaDevolucaoDTO } from '../DTO/UpdateTrocaDevolucaoDTO';
import { TrocaDevolucao } from '../entitie/TrocaDevolucao';
import { ITrocaDevolucaoRepository } from './TrocaDevolucaoRepository.interface';

class TrocaDevolucaoRepository implements ITrocaDevolucaoRepository {
  async create(entity: CreateTrocaDevolucaoDTO): Promise<TrocaDevolucao> {
    const trocaDevolucao = await prisma.troca_Devolucao.create({
      data: entity,
    });

    return trocaDevolucao;
  }

  async findBy(
    partial: Partial<TrocaDevolucao>,
  ): Promise<TrocaDevolucao | null> {
    const trocaDevolucao = await prisma.troca_Devolucao.findFirst({
      where: partial,
    });

    return trocaDevolucao;
  }

  async listBy({
    page = 1,
    limit = 10,
    filter,
  }: IPaginatedRequest<TrocaDevolucao>): Promise<
    IPaginatedResponse<TrocaDevolucao>
  > {
    const results = await prisma.troca_Devolucao.findMany({
      where: filter,
      take: limit,
      skip: (page - 1) * limit,
    });

    const total = await prisma.troca_Devolucao.count({
      where: filter,
    });

    return {
      results,
      limit,
      page,
      total,
    };
  }

  async update(entity: UpdateTrocaDevolucaoDTO): Promise<TrocaDevolucao> {
    const trocaDevolucao = await prisma.troca_Devolucao.update({
      where: { tde_Id: entity.tde_Id },
      data: { tde_Status: entity.tde_Status },
    });

    return trocaDevolucao;
  }

  async delete(entity: TrocaDevolucao): Promise<void> {
    await prisma.troca_Devolucao.delete({
      where: { tde_Id: entity.tde_Id },
    });
  }
}

export { TrocaDevolucaoRepository };

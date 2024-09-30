import { BadRequestError } from '@shared/errors/BadRequestError';
import { IPaginatedRequest } from '@shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '@shared/interfaces/IPaginatedResponse';
import { inject, injectable } from 'tsyringe';
import { TrocaDevolucao } from '../entitie/TrocaDevolucao';
import { ITrocaDevolucaoRepository } from '../repository/TrocaDevolucaoRepository.interface';

@injectable()
class ListarPorStatusService {
  constructor(
    @inject('TrocaDevolucaoRepository')
    private trocaDevolucaoRepository: ITrocaDevolucaoRepository,
  ) {}

  public async execute(
    data: IPaginatedRequest<TrocaDevolucao>,
  ): Promise<IPaginatedResponse<TrocaDevolucao>> {
    if (!data.filter || !data.filter.tde_Status) {
      throw new BadRequestError('Status não informado');
    }

    const trocasDevolucoes = await this.trocaDevolucaoRepository.listBy({
      filter: data.filter,
      page: data.page,
      limit: data.limit,
    });

    return trocasDevolucoes;
  }
}

export { ListarPorStatusService };

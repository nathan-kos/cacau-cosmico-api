import { tde_Status } from '@prisma/client';
import { BadRequestError } from '@shared/errors/BadRequestError';
import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { inject, injectable } from 'tsyringe';
import { TrocaDevolucao } from '../entitie/TrocaDevolucao';
import { ITrocaDevolucaoRepository } from '../repository/TrocaDevolucaoRepository.interface';

@injectable()
class RejeitarTrocaDevolucaoService {
  constructor(
    @inject('TrocaDevolucaoRepository')
    private trocaDevolucaoRepository: ITrocaDevolucaoRepository,
  ) {}

  public async execute(tde_Id: string): Promise<TrocaDevolucao> {
    const trocaDevolucao = await this.trocaDevolucaoRepository.findBy({
      tde_Id,
    });

    if (!trocaDevolucao) {
      throw new EntityNotFoundError('Troca ou Devolução não encontrada');
    }

    if (
      trocaDevolucao.tde_Status !== tde_Status.TROCA_SOLICITADA &&
      trocaDevolucao.tde_Status !== tde_Status.DEVOLUCAO_SOLICITADA
    ) {
      throw new BadRequestError('Troca ou Devolução já foi rejeitada');
    }

    const trocaDevolucaoUpdated = await this.trocaDevolucaoRepository.update({
      tde_Id,
      tde_Status:
        trocaDevolucao.tde_Troca === true
          ? tde_Status.TROCA_RECUSADA
          : tde_Status.DEVOLUCAO_RECUSADA,
    });

    return trocaDevolucaoUpdated;
  }
}

export { RejeitarTrocaDevolucaoService };

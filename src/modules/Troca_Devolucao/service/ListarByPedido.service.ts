import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { inject, injectable } from 'tsyringe';
import { TrocaDevolucao } from '../entitie/TrocaDevolucao';
import { ITrocaDevolucaoRepository } from '../repository/TrocaDevolucaoRepository.interface';

@injectable()
class ListarByChocolatePedidoService {
  constructor(
    @inject('TrocaDevolucaoRepository')
    private trocaDevolucaoRepository: ITrocaDevolucaoRepository,
  ) {}

  public async execute(data: string): Promise<TrocaDevolucao> {
    const trocasDevolucoes = await this.trocaDevolucaoRepository.findBy({
      tde_cho_ped_id: data,
    });

    if (!trocasDevolucoes) {
      throw new EntityNotFoundError('Troca não encontrada');
    }

    return trocasDevolucoes;
  }
}

export { ListarByChocolatePedidoService };

import { IChocolatePedidoRepository } from '@modules/Chocolate_Pedido/repository/ChocolateRepository.interface';
import { IPedidoRepository } from '@modules/Pedido/repository/PedidoRepository.interface';
import { BadRequestError } from '@shared/errors/BadRequestError';
import { IPaginatedRequest } from '@shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '@shared/interfaces/IPaginatedResponse';
import { inject, injectable } from 'tsyringe';
import { TrocaDevolucao } from '../entitie/TrocaDevolucao';
import { ITrocaDevolucaoRepository } from '../repository/TrocaDevolucaoRepository.interface';

@injectable()
class ListarByChocolatePedidoService {
  constructor(
    @inject('TrocaDevolucaoRepository')
    private trocaDevolucaoRepository: ITrocaDevolucaoRepository,

    @inject('PedidoRepository')
    private pedidoRepository: IPedidoRepository,

    @inject('ChocolatePedidoRepository')
    private chocolatePedidoRepository: IChocolatePedidoRepository,
  ) {}

  public async execute(
    data: IPaginatedRequest<TrocaDevolucao>,
  ): Promise<IPaginatedResponse<TrocaDevolucao>> {
    if (!data.filter || !data.filter.tde_cho_ped_id) {
      throw new BadRequestError('Chocolate Pedido não informado');
    }

    const trocasDevolucoes = await this.trocaDevolucaoRepository.listBy({
      filter: data.filter,
      page: data.page,
      limit: data.limit,
    });

    return trocasDevolucoes;
  }
}

export { ListarByChocolatePedidoService };

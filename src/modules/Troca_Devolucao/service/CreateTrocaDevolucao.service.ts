import { IChocolateRepository } from '@modules/Chocolate/repository/IChocolateRepository.interface';
import { IChocolatePedidoRepository } from '@modules/Chocolate_Pedido/repository/ChocolateRepository.interface';
import { tde_Status } from '@prisma/client';
import { BadRequestError } from '@shared/errors/BadRequestError';
import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { inject, injectable } from 'tsyringe';
import { TrocaDevolucao } from '../entitie/TrocaDevolucao';
import { ITrocaDevolucaoRepository } from '../repository/TrocaDevolucaoRepository.interface';

@injectable()
class CreateTrocaDevolucaoService {
  constructor(
    @inject('TrocaDevolucaoRepository')
    private trocaDevolucaoRepository: ITrocaDevolucaoRepository,

    @inject('ChocolateRepository')
    private chocolateRepository: IChocolateRepository,

    @inject('ChocolatePedidoRepository')
    private chocolatePedidoRepository: IChocolatePedidoRepository,
  ) {}

  public async execute(data: {
    tde_cho_ped_id: string;
    tde_Troca: boolean;
    tde_Quantidade: number;
  }): Promise<TrocaDevolucao> {
    // operador ternário se for troca o status é troca se não é devolução
    const status = data.tde_Troca
      ? tde_Status.TROCA_SOLICITADA
      : tde_Status.DEVOLUCAO_SOLICITADA;

    const trocaDevolucao = await this.trocaDevolucaoRepository.create({
      tde_cho_ped_id: data.tde_cho_ped_id,
      tde_Troca: data.tde_Troca,
      tde_Quantidade: data.tde_Quantidade,
      tde_Status: status,
    });

    if (!trocaDevolucao) {
      throw new EntityNotFoundError('Troca ou Devolução não encontrada');
    }

    const chocolatePedido = await this.chocolatePedidoRepository.findBy({
      chp_Id: data.tde_cho_ped_id,
    });

    if (!chocolatePedido) {
      throw new EntityNotFoundError('Chocolate Pedido não encontrado');
    }

    const chocolate = await this.chocolateRepository.findBy({
      cho_Id: chocolatePedido.chp_cho_id,
    });

    if (!chocolate) {
      throw new EntityNotFoundError('Chocolate não encontrado');
    }

    if (data.tde_Quantidade > chocolatePedido.chp_Quantidade) {
      throw new BadRequestError(
        'Quantidade de troca maior que a quantidade do chocolate no pedido',
      );
    }

    return trocaDevolucao;
  }
}

export { CreateTrocaDevolucaoService };

import { IChocolatePedidoRepository } from '@modules/Chocolate_Pedido/repository/ChocolateRepository.interface';
import { PedidoRepository } from '@modules/Pedido/repository/PedidoRepository';
import { ITrocaDevolucaoRepository } from '@modules/Troca_Devolucao/repository/TrocaDevolucaoRepository.interface';
import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { inject, injectable } from 'tsyringe';
import { Cupom } from '../entitie/Cupom';
import { ICupomRepository } from '../repository/ICupomRepository.interface';

@injectable()
class FindByChocoPedIdService {
  constructor(
    @inject('PedidoRepository')
    private pedidoRepository: PedidoRepository,

    @inject('ChocolatePedidoRepository')
    private chocolatePedidoRepository: IChocolatePedidoRepository,

    @inject('CupomRepository')
    private cupomRepository: ICupomRepository,

    @inject('TrocaDevolucaoRepository')
    private trocaDevolucaoRepository: ITrocaDevolucaoRepository,
  ) {}

  public async execute(tde_cho_ped_id: string): Promise<Cupom> {
    const chocolatePedido = await this.chocolatePedidoRepository.findBy({
      chp_Id: tde_cho_ped_id,
    });

    if (!chocolatePedido) {
      throw new EntityNotFoundError('Chocolate não encontrado');
    }

    const pedido = await this.pedidoRepository.findBy({
      ped_Id: chocolatePedido.chp_ped_id,
    });

    if (!pedido) {
      throw new EntityNotFoundError('Pedido não encontrado');
    }

    const trocaDevolucao = await this.trocaDevolucaoRepository.findBy({
      tde_cho_ped_id: chocolatePedido.chp_Id,
    });

    if (!trocaDevolucao) {
      throw new EntityNotFoundError('Troca ou devolução não encontrado');
    }

    const cupom = await this.cupomRepository.findBy({
      cup_tde_id: trocaDevolucao.tde_Id,
    });

    if (!cupom) {
      throw new EntityNotFoundError('Cupom não encontrado');
    }

    return cupom;
  }
}

export { FindByChocoPedIdService };

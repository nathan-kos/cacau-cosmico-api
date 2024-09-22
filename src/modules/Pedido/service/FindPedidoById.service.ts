import { ICartaoRepository } from '@modules/Cartao/repository/ICartaoRepository.interface';
import { ICartaoPedidoRepository } from '@modules/Cartao_Pedido/repository/CartaoPedidoRepository.interface';
import { IChocolateRepository } from '@modules/Chocolate/repository/IChocolateRepository.interface';
import { IChocolatePedidoRepository } from '@modules/Chocolate_Pedido/repository/ChocolateRepository.interface';
import { ICupomRepository } from '@modules/Cupom/repository/ICupomRepository.interface';
import { IEnderecoRepository } from '@modules/Endereco/repository/IEnderecoRepository.interface';
import { IPedidoCupomRepository } from '@modules/Pedido_Cupom/repository/PedidoCupomRepository.interface';
import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { inject, injectable } from 'tsyringe';
import { Pedido } from '../entitie/Pedido';
import { PedidoRepository } from '../repository/PedidoRepository';

@injectable()
class findPedidoByIdService {
  constructor(
    @inject('PedidoRepository')
    private pedidoRepository: PedidoRepository,

    @inject('ChocolatePedidoRepository')
    private pedidoChocolateRepository: IChocolatePedidoRepository,

    @inject('ChocolateRepository')
    private chocolateRepository: IChocolateRepository,

    @inject('CartaoPedidoRepository')
    private cartaoPedidoRepository: ICartaoPedidoRepository,

    @inject('CartaoRepository')
    private cartaoRepository: ICartaoRepository,

    @inject('EnderecoRepository')
    private enderecoRepository: IEnderecoRepository,

    @inject('PedidoCupomRepository')
    private pedidoCupomRepository: IPedidoCupomRepository,

    @inject('CupomRepository')
    private cupomRepository: ICupomRepository,
  ) {}

  async execute(ped_Id: string): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findBy({
      ped_Id,
    });

    if (!pedido) {
      throw new EntityNotFoundError('Pedido não encontrado');
    }

    // pega os itens do pedido
    const chocolatePedido = await this.pedidoChocolateRepository.listBy({
      page: 1,
      limit: 100,
      filter: {
        chp_ped_id: ped_Id,
      },
    });

    const promisseChocolate = chocolatePedido.results.map(async (chp) => {
      const chocolate = await this.chocolateRepository.findBy({
        cho_Id: chp.chp_cho_id,
      });

      Object.assign(chp, { chocolate });
    });

    const cartaoPedido = await this.cartaoPedidoRepository.listBy({
      page: 1,
      limit: 100,
      filter: {
        cap_ped_id: ped_Id,
      },
    });

    const promisseCartao = cartaoPedido.results.map(async (cap) => {
      const cartao = await this.cartaoRepository.findBy({
        car_Id: cap.cap_car_id,
      });

      Object.assign(cap, { cartao });
    });

    const pedidoCupom = await this.pedidoCupomRepository.listBy({
      page: 1,
      limit: 100,
      filter: {
        pcu_ped_id: ped_Id,
      },
    });

    const pedidoCupomPromisse = pedidoCupom.results.map(async (pcu) => {
      const cupom = await this.cupomRepository.findBy({
        cup_Id: pcu.pcu_cup_id,
      });

      Object.assign(pcu, { cupom });
    });

    const endereco = await this.enderecoRepository.findBy({
      end_Id: pedido.ped_end_id,
    });

    Object.assign(pedido, { endereco });

    await Promise.all([promisseChocolate, promisseCartao, pedidoCupomPromisse]);

    const cho = chocolatePedido.results;
    const car = cartaoPedido.results;
    const cup = pedidoCupom.results;

    Object.assign(pedido, { cho, car, cup });

    return pedido;
  }
}

export { findPedidoByIdService };

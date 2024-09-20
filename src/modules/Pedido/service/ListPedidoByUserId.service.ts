import { ICartaoRepository } from '@modules/Cartao/repository/ICartaoRepository.interface';
import { ICartaoPedidoRepository } from '@modules/Cartao_Pedido/repository/CartaoPedidoRepository.interface';
import { IChocolateRepository } from '@modules/Chocolate/repository/IChocolateRepository.interface';
import { IChocolatePedidoRepository } from '@modules/Chocolate_Pedido/repository/ChocolateRepository.interface';
import { IEnderecoRepository } from '@modules/Endereco/repository/IEnderecoRepository.interface';
import { BadRequestError } from '@shared/errors/BadRequestError';
import { IPaginatedRequest } from '@shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '@shared/interfaces/IPaginatedResponse';
import { inject, injectable } from 'tsyringe';
import { Pedido } from '../entitie/Pedido';
import { PedidoRepository } from '../repository/PedidoRepository';

@injectable()
class ListPedidoByUserIdService {
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
  ) {}

  async execute(
    data: IPaginatedRequest<Pedido>,
  ): Promise<IPaginatedResponse<Pedido>> {
    if (!data.filter || !data.filter.ped_usu_id) {
      throw new BadRequestError('Usuário não informado');
    }

    const pedidos = await this.pedidoRepository.listBy({
      limit: data.limit,
      page: data.page,
      filter: {
        ped_usu_id: data.filter.ped_usu_id,
      },
    });

    const pedidosDetalhados = await Promise.all(
      pedidos.results.map(async (pedido) => {
        // pega os itens do pedido
        const chocolatePedido = await this.pedidoChocolateRepository.listBy({
          page: 1,
          limit: 100,
          filter: {
            chp_ped_id: pedido.ped_Id,
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
            cap_ped_id: pedido.ped_Id,
          },
        });

        const promisseCartao = cartaoPedido.results.map(async (cap) => {
          const cartao = await this.cartaoRepository.findBy({
            car_Id: cap.cap_car_id,
          });

          Object.assign(cap, { cartao });
        });

        const endereco = await this.enderecoRepository.findBy({
          end_Id: pedido.ped_end_id,
        });

        Object.assign(pedido, { endereco });

        await Promise.all([promisseChocolate, promisseCartao]);

        Object.assign(pedido, { chocolatePedido, cartaoPedido });

        return pedido;
      }),
    );

    return {
      ...pedidos,
      results: pedidosDetalhados,
    };
  }
}

export { ListPedidoByUserIdService };

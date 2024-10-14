import { IChocolateRepository } from '@modules/Chocolate/repository/IChocolateRepository.interface';
import { IChocolatePedidoRepository } from '@modules/Chocolate_Pedido/repository/ChocolateRepository.interface';
import { IPedidoRepository } from '@modules/Pedido/repository/PedidoRepository.interface';
import { IUserRepository } from '@modules/User/repository/UserRepository.interface';
import { BadRequestError } from '@shared/errors/BadRequestError';
import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
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

    @inject('ChocolatePedidoRepository')
    private chocolatePedidoRepository: IChocolatePedidoRepository,

    @inject('ChocolateRepository')
    private chocolateRepository: IChocolateRepository,

    @inject('PedidoRepository')
    private pedidoRepository: IPedidoRepository,

    @inject('UserRepository')
    private userRepository: IUserRepository,
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

    const trocasDetalhadas = await Promise.all(
      trocasDevolucoes.results.map(async (troca) => {
        // Pega o chocolate pedido relacionado à troca/devolução
        const chocolatePedido = await this.chocolatePedidoRepository.findBy({
          chp_Id: troca.tde_cho_ped_id, // Supondo que haja essa relação
        });

        if (!chocolatePedido) {
          throw new EntityNotFoundError('Chocolate não encontrado');
        }

        const chocolate = await this.chocolateRepository.findBy({
          cho_Id: chocolatePedido.chp_cho_id,
        });
        Object.assign(chocolatePedido, { chocolate });

        // Pega o pedido relacionado e, com ele, o usuário
        const pedido = await this.pedidoRepository.findBy({
          ped_Id: chocolatePedido.chp_ped_id,
        });

        const usuario = await this.userRepository.findBy({
          usu_Id: pedido?.ped_usu_id,
        });

        Object.assign(troca, { pedido, usuario });

        // const chocolatePedido = chocolatePedido;
        Object.assign(troca, { chocolatePedido });

        return troca;
      }),
    );

    return {
      ...trocasDevolucoes,
      results: trocasDetalhadas,
    };
  }
}

export { ListarPorStatusService };

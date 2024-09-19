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

    return pedidos;
  }
}

export { ListPedidoByUserIdService };

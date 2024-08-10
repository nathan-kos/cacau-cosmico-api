import { IUserRepository } from '@modules/User/repository/UserRepository.interface';
import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { IPaginatedRequest } from '@shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '@shared/interfaces/IPaginatedResponse';
import { inject, injectable } from 'tsyringe';
import { Cartao } from '../entitie/Cartao';
import { ICartaoRepository } from '../repository/ICartaoRepository.interface';

@injectable()
class ListCartaoService {
  constructor(
    @inject('CartaoRepository')
    private cartaoRepository: ICartaoRepository,

    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(
    data: IPaginatedRequest<Cartao>,
  ): Promise<IPaginatedResponse<Cartao>> {
    if (!data.filter?.car_usu_id) {
      throw new EntityNotFoundError('Usuário não encontrado');
    }

    const user = await this.userRepository.findBy({
      usu_Id: data.filter.car_usu_id,
    });

    if (!user) {
      throw new EntityNotFoundError('Usuário não encontrado');
    }

    const cartoes = await this.cartaoRepository.listBy({
      page: data.page,
      limit: data.limit,
      filter: data.filter,
    });

    return cartoes;
  }
}

export { ListCartaoService };

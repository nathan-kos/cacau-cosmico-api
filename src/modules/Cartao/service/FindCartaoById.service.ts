import { IUserRepository } from '@modules/User/repository/UserRepository.interface';
import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { inject, injectable } from 'tsyringe';
import { Cartao } from '../entitie/Cartao';
import { ICartaoRepository } from '../repository/ICartaoRepository.interface';

@injectable()
class FindCartaoByIdService {
  constructor(
    @inject('CartaoRepository')
    private cartaoRepository: ICartaoRepository,

    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(usu_Id: string, car_Id: string): Promise<Cartao> {
    const user = await this.userRepository.findBy({ usu_Id });

    if (!user) {
      throw new EntityNotFoundError('Usuário não encontrado1');
    }

    const cartao = await this.cartaoRepository.findBy({ car_Id });

    if (!cartao) {
      throw new EntityNotFoundError('Cartão não encontrado2');
    }

    if (cartao.car_usu_id !== usu_Id) {
      throw new EntityNotFoundError('Cartão não encontrado3');
    }

    return cartao;
  }
}

export { FindCartaoByIdService };

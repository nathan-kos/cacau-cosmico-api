import { IUserRepository } from '@modules/User/repository/UserRepository.interface';
import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { inject, injectable } from 'tsyringe';
import { ICartaoRepository } from '../repository/ICartaoRepository.interface';

@injectable()
class DeleteCartaoService {
  constructor(
    @inject('CartaoRepository')
    private cartaoRepository: ICartaoRepository,

    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(usu_Id: string, car_Id: string): Promise<void> {
    const user = await this.userRepository.findBy({ usu_Id });

    if (!user) {
      throw new EntityNotFoundError('Usuário não encontrado');
    }

    const cartao = await this.cartaoRepository.findBy({ car_Id });

    if (!cartao) {
      throw new EntityNotFoundError('Cartão não encontrado');
    }

    if (cartao.car_usu_id !== usu_Id) {
      throw new EntityNotFoundError('Cartão não encontrado');
    }

    // adicionar verificação de compra e etc
    await this.cartaoRepository.delete(cartao);
  }
}

export { DeleteCartaoService };

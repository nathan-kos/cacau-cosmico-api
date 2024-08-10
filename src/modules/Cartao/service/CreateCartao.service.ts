import { IUserRepository } from '@modules/User/repository/UserRepository.interface';
import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { inject, injectable } from 'tsyringe';
import { ICreateCartaoDTO } from '../DTO/ICreateCartaoDTO';
import { Cartao } from '../entitie/Cartao';
import { ICartaoRepository } from '../repository/ICartaoRepository.interface';

@injectable()
class CreateCartaoService {
  constructor(
    @inject('CartaoRepository')
    private cartaoRepository: ICartaoRepository,

    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(data: ICreateCartaoDTO): Promise<Cartao> {
    const user = await this.userRepository.findBy({ usu_Id: data.car_usu_id });

    if (!user) {
      throw new EntityNotFoundError('Usuário não encontrado');
    }

    const cartao = await this.cartaoRepository.create(data);

    return cartao;
  }
}

export { CreateCartaoService };

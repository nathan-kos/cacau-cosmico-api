import { IUserRepository } from '@modules/User/repository/UserRepository.interface';
import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { inject, injectable } from 'tsyringe';
import { IEnderecoRepository } from '../repository/IEnderecoRepository.interface';

@injectable()
class DeleteEnderecoService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('EnderecoRepository')
    private enderecoRepository: IEnderecoRepository,
  ) {}

  public async execute(usu_Id: string, end_Id: string): Promise<void> {
    const user = await this.userRepository.findBy({ usu_Id });

    if (!user) {
      throw new EntityNotFoundError('Usuário não encontrado');
    }

    const endereco = await this.enderecoRepository.findBy({ end_Id });

    if (!endereco || endereco.end_usu_id !== user.usu_Id) {
      throw new EntityNotFoundError('Endereço não encontrado');
    }

    await this.enderecoRepository.delete(endereco);
  }
}

export { DeleteEnderecoService };

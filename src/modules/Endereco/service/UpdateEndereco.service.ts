import { IUserRepository } from '@modules/User/repository/UserRepository.interface';
import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { inject, injectable } from 'tsyringe';
import { IUpdateEnderecoDTO } from '../DTO/IUpdateEnderecoDTO';
import { Endereco } from '../entitie/Endereco';
import { IEnderecoRepository } from '../repository/IEnderecoRepository.interface';

@injectable()
class UpdateEnderecoService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('EnderecoRepository')
    private enderecoRepository: IEnderecoRepository,
  ) {}

  public async execute(data: IUpdateEnderecoDTO): Promise<Endereco> {
    const user = await this.userRepository.findBy({ usu_Id: data.end_usu_id });

    if (!user) {
      throw new EntityNotFoundError('Usuário não encontrado');
    }

    const endereco = await this.enderecoRepository.findBy({
      end_Id: data.end_Id,
    });

    if (!endereco || endereco.end_usu_id !== user.usu_Id) {
      throw new EntityNotFoundError('Endereço não encontrado');
    }

    const updatedEndereco = await this.enderecoRepository.update(data);

    return updatedEndereco;
  }
}

export { UpdateEnderecoService };

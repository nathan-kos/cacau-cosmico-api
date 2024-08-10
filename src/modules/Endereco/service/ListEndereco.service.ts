import { IUserRepository } from '@modules/User/repository/UserRepository.interface';
import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { IPaginatedRequest } from '@shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '@shared/interfaces/IPaginatedResponse';
import { inject, injectable } from 'tsyringe';
import { Endereco } from '../entitie/Endereco';
import { IEnderecoRepository } from '../repository/IEnderecoRepository.interface';

@injectable()
class ListEnderecoService {
  constructor(
    @inject('EnderecoRepository')
    private enderecoRepository: IEnderecoRepository,

    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute(
    data: IPaginatedRequest<Endereco>,
  ): Promise<IPaginatedResponse<Endereco>> {
    if (!data.filter?.end_usu_id) {
      throw new EntityNotFoundError('Usuário não informado');
    }

    const user = await this.userRepository.findBy({
      usu_Id: data.filter.end_usu_id,
    });

    if (!user) {
      throw new EntityNotFoundError('Usuário não encontrado');
    }

    const enderecos = await this.enderecoRepository.listBy({
      page: data.page,
      limit: data.limit,
      filter: data.filter,
    });

    return enderecos;
  }
}

export { ListEnderecoService };

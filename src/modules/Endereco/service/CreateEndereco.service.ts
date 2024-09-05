import { IUserRepository } from '@modules/User/repository/UserRepository.interface';
import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { inject, injectable } from 'tsyringe';
import { ICreateEnderecoDTO } from '../DTO/ICreateEnderecoDTO';
import { Endereco } from '../entitie/Endereco';
import { IEnderecoRepository } from '../repository/IEnderecoRepository.interface';

@injectable()
class CreateEnderecoService {
  constructor(
    @inject('EnderecoRepository')
    private enderecoRepository: IEnderecoRepository,

    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute(data: ICreateEnderecoDTO): Promise<Endereco> {
    const user = await this.userRepository.findBy({ usu_Id: data.usu_Id });

    if (!user) {
      throw new EntityNotFoundError('Usuário não encontrado');
    }

    const endereco = await this.enderecoRepository.create({
      usu_Id: data.usu_Id,
      endereco: {
        end_Rua: data.endereco.end_Rua,
        end_Numero: data.endereco.end_Numero,
        end_Bairro: data.endereco.end_Bairro,
        end_CEP: data.endereco.end_CEP,
        end_Complemento: data.endereco.end_Complemento,
        end_Cidade: data.endereco.end_Cidade,
        end_Tipo: data.endereco.end_Tipo,
        end_UF: data.endereco.end_UF,
        end_Cobranca: data.endereco.end_Cobranca,
        end_Entrega: data.endereco.end_Entrega,
        end_Apelido: data.endereco.end_Apelido,
      },
    });

    return endereco;
  }
}

export { CreateEnderecoService };

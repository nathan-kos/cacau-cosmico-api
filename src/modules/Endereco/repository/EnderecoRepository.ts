import { prisma } from '@shared/database';
import { IPaginatedRequest } from '@shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '@shared/interfaces/IPaginatedResponse';
import { ICreateEnderecoDTO } from '../DTO/ICreateEnderecoDTO';
import { IUpdateEnderecoDTO } from '../DTO/IUpdateEnderecoDTO';
import { Endereco } from '../entitie/Endereco';
import { IEnderecoRepository } from './IEnderecoRepository.interface';

class EnderecoRepository implements IEnderecoRepository {
  async create(entity: ICreateEnderecoDTO): Promise<Endereco> {
    const data = await prisma.endereco.create({
      data: {
        end_Rua: entity.endereco.end_Rua,
        end_Numero: entity.endereco.end_Numero,
        end_Bairro: entity.endereco.end_Bairro,
        end_CEP: entity.endereco.end_CEP,
        end_Complemento: entity.endereco.end_Complemento,
        end_usu_id: entity.usu_Id,
        end_Tipo: entity.endereco.end_Tipo,
        end_UF: entity.endereco.end_UF,
        end_Cidade: entity.endereco.end_Cidade,
        end_Apelido: entity.endereco.end_Apelido,
        end_Entrega: entity.endereco.end_Entrega,
        end_Cobranca: entity.endereco.end_Cobranca,
      },
    });

    return data;
  }

  findBy(partial: Partial<Endereco>): Promise<Endereco | null> {
    const endereco = prisma.endereco.findFirst({
      where: { ...partial },
    });

    return endereco;
  }

  async listBy({
    page = 1,
    limit = 10,
    filter,
  }: IPaginatedRequest<Endereco>): Promise<IPaginatedResponse<Endereco>> {
    const data = await prisma.endereco.findMany({
      where: { ...filter },
      skip: (page - 1) * limit,
      take: limit,
    });

    const total = await prisma.endereco.count({
      where: filter,
    });

    return {
      results: data,
      total,
      page,
      limit,
    };
  }

  async update(entity: IUpdateEnderecoDTO): Promise<Endereco> {
    const endereco = await prisma.endereco.update({
      where: { end_Id: entity.end_Id },
      data: entity,
    });

    return endereco;
  }

  async delete(entity: Endereco): Promise<void> {
    await prisma.endereco.delete({
      where: { end_Id: entity.end_Id },
    });
  }
}

export { EnderecoRepository };

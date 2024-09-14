import { ICategoriaChocolateRepository } from '@modules/Categoria_Chocolate/repository/ICategoria_Chocolate.interface';
import { BadRequestError } from '@shared/errors/BadRequestError';
import { IPaginatedRequest } from '@shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '@shared/interfaces/IPaginatedResponse';
import { inject, injectable } from 'tsyringe';
import { Chocolate } from '../entitie/chocolate';
import { IChocolateRepository } from '../repository/IChocolateRepository.interface';

@injectable()
class ListAllNameService {
  constructor(
    @inject('ChocolateRepository')
    private chocolateRepository: IChocolateRepository,

    @inject('CategoriaChocolateRepository')
    private categoriaChocolateRepository: ICategoriaChocolateRepository,
  ) {}

  async execute(
    data: IPaginatedRequest<Chocolate>,
  ): Promise<IPaginatedResponse<Chocolate>> {
    if (!data.filter?.cho_Nome) {
      throw new BadRequestError('Nome do chocolate é obrigatório');
    }

    const chocolates = await this.chocolateRepository.listByNome({
      page: data.page,
      limit: data.limit,
      filter: {
        cho_Nome: data.filter.cho_Nome,
      },
    });

    await Promise.all(
      chocolates.results.map(async (chocolate) => {
        const categorias = await this.categoriaChocolateRepository.listBy({
          page: 1,
          limit: 100,
          filter: {
            cch_cho_id: chocolate.cho_Id,
          },
        });

        Object.assign(chocolate, {
          categorias: categorias.results,
        });
      }),
    );

    return {
      results: chocolates.results,
      total: chocolates.total,
      page: chocolates.page,
      limit: chocolates.limit,
    };
  }
}

export { ListAllNameService };

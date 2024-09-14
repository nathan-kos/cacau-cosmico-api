import { ICategoriaChocolateRepository } from '@modules/Categoria_Chocolate/repository/ICategoria_Chocolate.interface';
import { categoria } from '@prisma/client';
import { IPaginatedResponse } from '@shared/interfaces/IPaginatedResponse';
import { inject, injectable } from 'tsyringe';
import { Chocolate } from '../entitie/chocolate';
import { IChocolateRepository } from '../repository/IChocolateRepository.interface';

@injectable()
class ListByCategoriaService {
  constructor(
    @inject('ChocolateRepository')
    private chocolateRepository: IChocolateRepository,

    @inject('CategoriaChocolateRepository')
    private categoriaChocolateRepository: ICategoriaChocolateRepository,
  ) {}

  async execute(
    page: number,
    limit: number,
    cat: categoria,
  ): Promise<IPaginatedResponse<Chocolate>> {
    const cat_chos = await this.categoriaChocolateRepository.listBy({
      page,
      limit,
      filter: {
        cch_Categoria: cat,
      },
    });

    const chocolates: Chocolate[] = [];
    await Promise.all(
      cat_chos.results.map(async (cch) => {
        const chocolate = await this.chocolateRepository.findBy({
          cho_Id: cch.cch_cho_id,
        });

        if (!chocolate) {
          return;
        }

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

        chocolates.push(chocolate);
      }),
    );

    return {
      page: cat_chos.page,
      limit: cat_chos.limit,
      total: cat_chos.total,
      results: chocolates,
    };
  }
}

export { ListByCategoriaService };

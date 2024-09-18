import { ICategoriaChocolateRepository } from '@modules/Categoria_Chocolate/repository/ICategoria_Chocolate.interface';
import { categoria, Chocolate } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { IChocolateRepository } from '../repository/IChocolateRepository.interface';

@injectable()
class GetIndexChocolateService {
  constructor(
    @inject('ChocolateRepository')
    private chocolateRepository: IChocolateRepository,

    @inject('CategoriaChocolateRepository')
    private categoriaChocolateRepository: ICategoriaChocolateRepository,
  ) {}

  public async execute(): Promise<Chocolate[]> {
    const branco = await this.categoriaChocolateRepository.listBy({
      limit: 100,
      page: 1,
      filter: {
        cch_Categoria: categoria.BRANCO,
      },
    });

    const aoLeite = await this.categoriaChocolateRepository.listBy({
      limit: 100,
      page: 1,
      filter: {
        cch_Categoria: categoria.AO_LEITE,
      },
    });

    const amargo = await this.categoriaChocolateRepository.listBy({
      limit: 100,
      page: 1,
      filter: {
        cch_Categoria: categoria.AMARGO,
      },
    });

    // aleatoriza um de cada categoria
    const randomBranco =
      branco.results[Math.floor(Math.random() * branco.results.length)];

    const randomAoLeite =
      aoLeite.results[Math.floor(Math.random() * aoLeite.results.length)];

    const randomAmargo =
      amargo.results[Math.floor(Math.random() * amargo.results.length)];

    const chocolateBranco = await this.chocolateRepository.findBy({
      cho_Id: randomBranco.cch_cho_id,
    });

    const chocolateAoLeite = await this.chocolateRepository.findBy({
      cho_Id: randomAoLeite.cch_cho_id,
    });

    const chocolateAmargo = await this.chocolateRepository.findBy({
      cho_Id: randomAmargo.cch_cho_id,
    });

    if (!chocolateBranco || !chocolateAoLeite || !chocolateAmargo) {
      return [];
    }

    const chocolates = [chocolateBranco, chocolateAoLeite, chocolateAmargo];

    await Promise.all(
      chocolates.map(async (chocolate) => {
        if (!chocolate) {
          return;
        }

        const categorias = await this.categoriaChocolateRepository.listBy({
          limit: 100,
          page: 1,
          filter: {
            cch_cho_id: chocolate.cho_Id,
          },
        });

        Object.assign(chocolate, {
          categorias: categorias.results,
        });
      }),
    );

    const anyChocolate = await this.chocolateRepository.listBy({
      limit: 1,
      page: 1,
    });

    // numero aleatória de 0 a anyChocolate.total
    const random = Math.floor(Math.random() * anyChocolate.total);

    const randomChocolate = anyChocolate.results[random];

    if (!randomChocolate) {
      return chocolates;
    }

    await Promise.all(
      chocolates.map(async (chocolate) => {
        if (!chocolate) {
          return;
        }

        const categorias = await this.categoriaChocolateRepository.listBy({
          limit: 100,
          page: 1,
          filter: {
            cch_cho_id: chocolate.cho_Id,
          },
        });

        Object.assign(chocolate, {
          categorias: categorias.results,
        });
      }),
    );

    chocolates.push(randomChocolate);

    return chocolates;
  }
}

export { GetIndexChocolateService };

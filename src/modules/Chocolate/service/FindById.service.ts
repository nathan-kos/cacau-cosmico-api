import { ICategoriaChocolateRepository } from '@modules/Categoria_Chocolate/repository/ICategoria_Chocolate.interface';
import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { inject, injectable } from 'tsyringe';
import { IChocolateRepository } from '../repository/IChocolateRepository.interface';

@injectable()
class FindByIdService {
  constructor(
    @inject('ChocolateRepository')
    private chocolateRepository: IChocolateRepository,

    @inject('CategoriaChocolateRepository')
    private categoriaChocolateRepository: ICategoriaChocolateRepository,
  ) {}

  async execute(id: string) {
    const chocolate = await this.chocolateRepository.findBy({ cho_Id: id });

    if (!chocolate) {
      throw new EntityNotFoundError(
        'Produto não encontrado, deve ter se perdido no espaço',
      );
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

    return chocolate;
  }
}

export { FindByIdService };

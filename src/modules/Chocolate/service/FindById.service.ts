import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { inject, injectable } from 'tsyringe';
import { IChocolateRepository } from '../repository/IChocolateRepository.interface';

@injectable()
class FindByIdService {
  constructor(
    @inject('IChocolateRepository')
    private chocolateRepository: IChocolateRepository,
  ) {}

  async execute(id: string) {
    const chocolate = await this.chocolateRepository.findBy({ cho_Id: id });

    if (!chocolate) {
      throw new EntityNotFoundError(
        'Produto não encontrado, deve ter se perdido no espaço',
      );
    }

    return chocolate;
  }
}

export { FindByIdService };

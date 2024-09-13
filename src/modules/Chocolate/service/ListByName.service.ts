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
  ) {}

  async execute(
    data: IPaginatedRequest<Chocolate>,
  ): Promise<IPaginatedResponse<Chocolate>> {
    if (!data.filter?.cho_Nome) {
      throw new BadRequestError('Nome do chocolate é obrigatório');
    }

    const chocolates = await this.chocolateRepository.listBy({
      page: data.page,
      limit: data.limit,
      filter: {
        cho_Nome: data.filter.cho_Nome,
      },
    });

    return {
      results: chocolates.results,
      total: chocolates.total,
      page: chocolates.page,
      limit: chocolates.limit,
    };
  }
}

export { ListAllNameService };

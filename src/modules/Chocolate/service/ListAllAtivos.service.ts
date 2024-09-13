import { IPaginatedRequest } from '@shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '@shared/interfaces/IPaginatedResponse';
import { inject, injectable } from 'tsyringe';
import { Chocolate } from '../entitie/chocolate';
import { IChocolateRepository } from '../repository/IChocolateRepository.interface';

@injectable()
class ListAllAtivosService {
  constructor(
    @inject('IChocolateRepository')
    private chocolateRepository: IChocolateRepository,
  ) {}

  async execute(
    data: IPaginatedRequest<Chocolate>,
  ): Promise<IPaginatedResponse<Chocolate>> {
    const chocolates = await this.chocolateRepository.listBy({
      page: data.page,
      limit: data.limit,
      filter: {
        cho_Ativo: true,
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

export { ListAllAtivosService };

import { IBasicRepository } from '@shared/interfaces/BasicRepository';
import { IPaginatedRequest } from '@shared/interfaces/IPaginatedRequest';
import { IPaginatedResponse } from '@shared/interfaces/IPaginatedResponse';
import { Chocolate } from '../entitie/chocolate';

interface IChocolateRepository extends IBasicRepository<Chocolate> {
  listByNome(
    data: IPaginatedRequest<Chocolate>,
  ): Promise<IPaginatedResponse<Chocolate>>;
}

export { IChocolateRepository };

import { inject } from 'tsyringe';
import { ICupomRepository } from '../repository/ICupomRepository.interface';

class CreateCupomService {
  constructor(
    @inject('CupomRepository')
    private cupomRepository: ICupomRepository,
  ) {}

  async execute() {}
}

export { CreateCupomService };

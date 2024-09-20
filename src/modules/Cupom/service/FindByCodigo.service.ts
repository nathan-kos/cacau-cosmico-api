import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { inject, injectable } from 'tsyringe';
import { ICupomRepository } from '../repository/ICupomRepository.interface';

@injectable()
class FindByCodigoService {
  constructor(
    @inject('CupomRepository')
    private cupomRepository: ICupomRepository,
  ) {}

  async execute(codigo: string) {
    const cupom = await this.cupomRepository.findBy({
      cup_Codigo: codigo,
    });

    if (!cupom) {
      throw new EntityNotFoundError('Cupom não encontrado');
    }

    return cupom;
  }
}

export { FindByCodigoService };

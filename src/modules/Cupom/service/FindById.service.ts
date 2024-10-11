import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { inject, injectable } from 'tsyringe';
import { ICupomRepository } from '../repository/ICupomRepository.interface';

@injectable()
class FindCupomByIdService {
  constructor(
    @inject('CupomRepository')
    private cupomRepository: ICupomRepository,
  ) {}

  public async execute(cup_Id: string) {
    const cupom = await this.cupomRepository.findBy({
      cup_Id,
    });

    if (!cupom) {
      throw new EntityNotFoundError(
        'Cupom não encontrado entre com contato com a administração',
      );
    }

    return cupom;
  }
}

export { FindCupomByIdService };

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

    return cupom;
  }
}

export { FindByCodigoService };

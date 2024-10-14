import { IChocolateRepository } from '@modules/Chocolate/repository/IChocolateRepository.interface';
import { IChocolatePedidoRepository } from '@modules/Chocolate_Pedido/repository/ChocolateRepository.interface';
import { Cupom } from '@modules/Cupom/entitie/Cupom';
import { ICupomRepository } from '@modules/Cupom/repository/ICupomRepository.interface';
import { tde_Status } from '@prisma/client';
import { BadRequestError } from '@shared/errors/BadRequestError';
import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { inject, injectable } from 'tsyringe';
import { ITrocaDevolucaoRepository } from '../repository/TrocaDevolucaoRepository.interface';

@injectable()
class AceitarTrocaDevolucaoService {
  constructor(
    @inject('TrocaDevolucaoRepository')
    private trocaDevolucaoRepository: ITrocaDevolucaoRepository,

    @inject('CupomRepository')
    private cupomRepository: ICupomRepository,

    @inject('ChocolateRepository')
    private chocolateRepository: IChocolateRepository,

    @inject('ChocolatePedidoRepository')
    private chocolatePedidoRepository: IChocolatePedidoRepository,
  ) {}

  public async execute(tde_Id: string): Promise<Cupom> {
    const trocaDevolucao = await this.trocaDevolucaoRepository.findBy({
      tde_Id,
    });

    if (!trocaDevolucao) {
      throw new EntityNotFoundError('Troca ou Devolução não encontrada');
    }

    if (
      trocaDevolucao.tde_Status !== tde_Status.TROCA_SOLICITADA &&
      trocaDevolucao.tde_Status !== tde_Status.DEVOLUCAO_SOLICITADA
    ) {
      throw new BadRequestError('Troca ou Devolução já foi aceita');
    }

    let status: tde_Status = tde_Status.TROCA_ACEITA;
    if (!trocaDevolucao.tde_Troca) {
      status = tde_Status.DEVOLUCAO_ACEITA;
    }

    await this.trocaDevolucaoRepository.update({
      tde_Id,
      tde_Status: status,
    });

    const chocolatePedido = await this.chocolatePedidoRepository.findBy({
      chp_Id: trocaDevolucao.tde_cho_ped_id,
    });

    if (!chocolatePedido) {
      throw new EntityNotFoundError('Chocolate Pedido não encontrado');
    }

    const chocolate = await this.chocolateRepository.findBy({
      cho_Id: chocolatePedido.chp_cho_id,
    });

    if (!chocolate) {
      throw new EntityNotFoundError('Chocolate não encontrado');
    }

    const cup_Valor = trocaDevolucao.tde_Quantidade * chocolate.cho_Valor;

    // primeira parte do uuid do chocolatepedido
    const cup_Codigo = tde_Id.slice(0, 8);

    const cupom = await this.cupomRepository.create({
      cup_Valor,
      cup_tde_id: trocaDevolucao.tde_Id,
      cup_Codigo,
    });

    if (!cupom) {
      throw new EntityNotFoundError('Cupom não encontrado');
    }

    return cupom;
  }
}

export { AceitarTrocaDevolucaoService };

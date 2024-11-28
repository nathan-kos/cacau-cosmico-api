/* eslint-disable no-await-in-loop */
import { CartaoPedidoRepository } from '@modules/Cartao_Pedido/repository/CartaoPedidoRepository';
import { ChocolateRepository } from '@modules/Chocolate/repository/ChocolateRepository';
import { ChocolatePedidoRepository } from '@modules/Chocolate_Pedido/repository/ChocolatePedidoRepository';
import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { inject, injectable } from 'tsyringe';
import { PedidoRepository } from '../repository/PedidoRepository';

@injectable()
class GeradorDePedido {
  constructor(
    @inject('PedidoRepository')
    private pedidoRepository: PedidoRepository,

    @inject('ChocolateRepository')
    private chocolateRepository: ChocolateRepository,

    @inject('ChocolatePedidoRepository')
    private chocolatePedidoRepository: ChocolatePedidoRepository,

    @inject('CartaoPedidoRepository')
    private cartaoPedidoRepository: CartaoPedidoRepository,
  ) {}

  async execute(vezes: number) {
    const usu_Id = '6f07af2f-51e5-4f01-b01c-61cea1473eae';
    const end_Id = '3afe4525-31b0-484b-a084-316193550473';
    const frete = 10;
    const cartao = 'abd0d207-ebaa-4db2-903b-60bdca8489f3';
    const chocolates = [
      '08ef6c5d-3e2c-4647-944a-3e1f7e2f5ae7',
      '16487dba-a292-4154-9ba5-db5f9a15125c',
      '27c11da4-4517-4b4f-a96b-2d7b2639c762',
      '30c86cdd-3a11-4679-8e77-e927f4cc46b4',
      '48b73224-21a4-4c17-928a-c6d56f88b3da',
      '4b871583-1685-41e7-a4df-a96e8c02ca67',
      '4e1238ba-9212-44a4-85b4-5c3f4bcff53c',
      '5a592fff-5102-4cb6-8430-c839d83c7612',
      '5e3ab1f6-92ac-4c7a-876b-6ee9f21c6628',
      '61f3d3c6-e529-4323-8f6f-d154a896c37e',
      '727b7526-6d1b-4bf5-8a43-cc64a0b5f2dd',
      '85b23e33-1fc8-405b-bc2f-d26e7ef12a1d',
      '90db7f56-9c73-4d5c-b8df-71f649a2a64f',
      '90f597a8-cf32-4130-8378-29b8a2c85046',
      'af29eb85-38f7-4e47-af3d-bc0cb40485dd',
      'afd2b027-914f-4f14-9fa3-f15a8a8dc592',
      'c8f22b36-cbc2-4be7-85ba-7b4c9e739a7c',
      'e9d17106-7e63-4548-9e5b-e0ba738febe3',
      'f0e5c0b6-65f6-48b9-a745-85c540a8f717',
      'f1a79238-75ae-4e60-a2cb-f68049e0e107',
      'f9597999-74ab-42e9-8fb4-4456c7723211',
    ];

    const datas = [
      '2024-09-01T00:00:00.000Z',
      '2024-09-02T00:00:00.000Z',
      '2024-09-03T00:00:00.000Z',
      '2024-09-04T00:00:00.000Z',
      '2024-09-05T00:00:00.000Z',
      '2024-09-06T00:00:00.000Z',
      '2024-09-07T00:00:00.000Z',
      '2024-09-08T00:00:00.000Z',
      '2024-09-09T00:00:00.000Z',
      '2024-09-10T00:00:00.000Z',
      '2024-09-11T00:00:00.000Z',
      '2024-09-12T00:00:00.000Z',
      '2024-09-13T00:00:00.000Z',
      '2024-09-14T00:00:00.000Z',
      '2024-09-15T00:00:00.000Z',
      '2024-09-16T00:00:00.000Z',
      '2024-09-17T00:00:00.000Z',
      '2024-09-18T00:00:00.000Z',
      '2024-09-19T00:00:00.000Z',
      '2024-09-20T00:00:00.000Z',
      '2024-09-21T00:00:00.000Z',
      '2024-09-22T00:00:00.000Z',
      '2024-09-23T00:00:00.000Z',
      '2024-09-24T00:00:00.000Z',
      '2024-09-25T00:00:00.000Z',
      '2024-09-26T00:00:00.000Z',
      '2024-09-27T00:00:00.000Z',
      '2024-09-28T00:00:00.000Z',
      '2024-09-29T00:00:00.000Z',
      '2024-09-30T00:00:00.000Z',
      '2024-09-30T00:00:00.000Z',
      '2024-10-01T00:00:00.000Z',
      '2024-10-02T00:00:00.000Z',
      '2024-10-03T00:00:00.000Z',
      '2024-10-04T00:00:00.000Z',
      '2024-10-05T00:00:00.000Z',
      '2024-10-06T00:00:00.000Z',
      '2024-10-07T00:00:00.000Z',
      '2024-10-08T00:00:00.000Z',
      '2024-10-09T00:00:00.000Z',
      '2024-10-10T00:00:00.000Z',
      '2024-10-11T00:00:00.000Z',
      '2024-10-12T00:00:00.000Z',
      '2024-10-13T00:00:00.000Z',
      '2024-10-14T00:00:00.000Z',
      '2024-10-15T00:00:00.000Z',
      '2024-10-16T00:00:00.000Z',
      '2024-10-17T00:00:00.000Z',
      '2024-10-18T00:00:00.000Z',
      '2024-10-19T00:00:00.000Z',
      '2024-10-20T00:00:00.000Z',
      '2024-10-21T00:00:00.000Z',
      '2024-10-22T00:00:00.000Z',
      '2024-10-23T00:00:00.000Z',
      '2024-10-24T00:00:00.000Z',
      '2024-10-25T00:00:00.000Z',
      '2024-10-26T00:00:00.000Z',
      '2024-10-27T00:00:00.000Z',
      '2024-10-28T00:00:00.000Z',
      '2024-10-29T00:00:00.000Z',
      '2024-10-30T00:00:00.000Z',
      '2024-10-30T00:00:00.000Z',
    ];

    for (let i = 0; i < vezes; i += 1) {
      const chocolateId = this.getRandomItem(chocolates);
      const pedCriadoEm = this.getRandomItem(datas);

      const chocolate = await this.chocolateRepository.findBy({
        cho_Id: chocolateId,
      });

      if (!chocolate) {
        throw new EntityNotFoundError('Não era pra acontecer');
      }

      // Criação do pedido
      const pedido = await this.pedidoRepository.createWithDate({
        ped_usu_id: usu_Id,
        ped_end_id: end_Id,
        ped_Frete: frete,
        ped_CriadoEm: pedCriadoEm,
        ped_Status: 'PAGAMENTO_REALIZADO',
        ped_ValorTotal: chocolate.cho_Valor + frete,
      });

      // Criação do item do pedido com o chocolate aleatório
      await this.chocolatePedidoRepository.create({
        chp_ped_id: pedido.ped_Id,
        chp_cho_id: chocolateId,
        chp_Quantidade: Math.floor(Math.random() * (30 - 10 + 1)) + 10,
      });

      // Relacionamento com o cartão
      await this.cartaoPedidoRepository.create({
        cap_ped_id: pedido.ped_Id,
        cap_car_id: cartao,
        cap_Valor: chocolate.cho_Valor + frete,
      });
    }

    return true;
  }

  private getRandomItem<T>(items: T[]): T {
    return items[Math.floor(Math.random() * items.length)];
  }
}

export { GeradorDePedido };

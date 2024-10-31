/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { IChocolateRepository } from '@modules/Chocolate/repository/IChocolateRepository.interface';
import { IChocolatePedidoRepository } from '@modules/Chocolate_Pedido/repository/ChocolateRepository.interface';
import { PedidoRepository } from '@modules/Pedido/repository/PedidoRepository';
import { inject, injectable } from 'tsyringe';
import { Relatorio } from '../entitie/Relatorio';

@injectable()
class ListPedidoByDate {
  constructor(
    @inject('PedidoRepository')
    private pedidoRepository: PedidoRepository,

    @inject('ChocolatePedidoRepository')
    private pedidoChocolateRepository: IChocolatePedidoRepository,

    @inject('ChocolateRepository')
    private chocolateRepository: IChocolateRepository,
  ) {}

  async execute(initialDate: string, finalDate: string): Promise<Relatorio> {
    // Parse as datas iniciais e finais
    const startDate = new Date(initialDate);
    const endDate = new Date(finalDate);

    // Busca todos os chocolates
    const chocolates = await this.chocolateRepository.listBy({
      limit: 100,
      page: 1,
    });

    // Gera uma lista de datas no intervalo especificado
    const datesInRange: Date[] = [];
    for (
      let currentDate = new Date(startDate);
      currentDate <= endDate;
      currentDate.setDate(currentDate.getDate() + 1)
    ) {
      datesInRange.push(new Date(currentDate));
    }

    // Usa map para evitar loops externos
    const vendas = await Promise.all(
      chocolates.results.map(async (chocolate) => {
        const data = await Promise.all(
          datesInRange.map(async (currentDate) => {
            const nextDate = new Date(currentDate);
            nextDate.setDate(currentDate.getDate() + 1);

            // Busca pedidos para o dia específico
            const pedidos = await this.pedidoRepository.ListByDate(
              currentDate,
              nextDate,
            );

            // Conta a quantidade vendida do chocolate no dia
            let quantidadeVendida = 0;

            for (const pedido of pedidos) {
              const chocolatesPedidos =
                await this.pedidoChocolateRepository.listBy({
                  filter: {
                    chp_ped_id: pedido.ped_Id,
                  },
                  page: 1,
                  limit: 100,
                });

              // Verifica se o chocolate atual foi vendido neste pedido e acumula a quantidade
              const chocolatePedido = chocolatesPedidos.results.find(
                (cp) => cp.chp_cho_id === chocolate.cho_Id,
              );
              if (chocolatePedido) {
                quantidadeVendida += chocolatePedido.chp_Quantidade;
              }
            }

            return {
              quantidade: quantidadeVendida,
              data: currentDate,
            };
          }),
        );

        return {
          chocolate: chocolate.cho_Nome,
          data,
        };
      }),
    );

    const relatorio: Relatorio = {
      vendas,
    };

    return relatorio;
  }
}

export { ListPedidoByDate };

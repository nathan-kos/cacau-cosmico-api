import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListPedidoByDate } from '../Services/listPedidoByData.service';

class RelatorioController {
  async getRelatorio(req: Request, res: Response) {
    const { dataInicial, dataFinal } = req.params;

    const listPedidoByDateService = container.resolve(ListPedidoByDate);

    const data = await listPedidoByDateService.execute(dataInicial, dataFinal);

    return res.status(200).json(data);
  }
}

export { RelatorioController };

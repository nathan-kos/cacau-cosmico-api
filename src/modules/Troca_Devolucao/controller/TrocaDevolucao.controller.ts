import { tde_Status } from '@prisma/client';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AceitarTrocaDevolucaoService } from '../service/AceitarTrocaDevolucao.service';
import { CreateTrocaDevolucaoService } from '../service/CreateTrocaDevolucao.service';
import { ListarByChocolatePedidoService } from '../service/ListarByPedido.service';
import { ListarPorStatusService } from '../service/ListarPorStatus.service';
import { RejeitarTrocaDevolucaoService } from '../service/RejeitarTrocaDevolucao.service';

class TrocaDevolucaoController {
  async createTrocaDevolucao(req: Request, res: Response) {
    const { tde_Troca, tde_Quantidade } = req.body;
    const { tde_cho_ped_id } = req.params;

    const createTrocaDevolucaoService = container.resolve(
      CreateTrocaDevolucaoService,
    );

    const troca_devolucao = await createTrocaDevolucaoService.execute({
      tde_cho_ped_id,
      tde_Quantidade,
      tde_Troca,
    });

    return res.status(200).json(troca_devolucao);
  }

  async aceitarTrocaDevolucao(req: Request, res: Response) {
    const { tde_Id } = req.params;

    const aceitarTrocaDevolucao = container.resolve(
      AceitarTrocaDevolucaoService,
    );

    const cupom = await aceitarTrocaDevolucao.execute(tde_Id);

    return res.status(200).json(cupom);
  }

  async recusarTrocaDevolucao(req: Request, res: Response) {
    const { tde_Id } = req.params;

    const recusarTrocaDevolucao = container.resolve(
      RejeitarTrocaDevolucaoService,
    );

    const trocaDevolucao = await recusarTrocaDevolucao.execute(tde_Id);

    return res.status(200).json(trocaDevolucao);
  }

  async listTrocaDevolucao(req: Request, res: Response) {
    const { page, limit } = req.query;
    const { status } = req.params;

    const listTrocaDevolucao = container.resolve(ListarPorStatusService);

    const trocasDevolucoes = await listTrocaDevolucao.execute({
      page: Number(page),
      limit: Number(limit),
      filter: {
        tde_Status: status as tde_Status,
      },
    });

    return res.status(200).json(trocasDevolucoes);
  }

  async listTrocaDevolucaoByChocolatePedido(req: Request, res: Response) {
    const { tde_cho_ped_id } = req.params;

    const listTrocaDevolucao = container.resolve(
      ListarByChocolatePedidoService,
    );

    const trocasDevolucoes = await listTrocaDevolucao.execute(tde_cho_ped_id);

    return res.status(200).json(trocasDevolucoes);
  }
}

export { TrocaDevolucaoController };

import { StatusPedido } from '@prisma/client';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AtualizarStatusPedidoService } from '../service/AtualizarStatusPedido.service';
import { CreatePedidoService } from '../service/CreatePedido.service';
import { findPedidoByIdService } from '../service/FindPedidoById.service';
import { ListByStatusService } from '../service/ListByStatus.service';
import { ListPedidoByUserIdService } from '../service/ListPedidoByUserId.service';

class PedidoController {
  async findPedidoById(req: Request, res: Response) {
    const { ped_Id } = req.params;

    const findPedidoById = container.resolve(findPedidoByIdService);

    const pedido = await findPedidoById.execute(ped_Id);

    return res.status(200).json(pedido);
  }

  async listPedidoByUserId(req: Request, res: Response) {
    const { page, limit } = req.query;
    const { ped_usu_id } = req.params;

    const listPedidoByUserId = container.resolve(ListPedidoByUserIdService);

    const pedidos = await listPedidoByUserId.execute({
      page: Number(page),
      limit: Number(limit),
      filter: {
        ped_usu_id,
      },
    });

    return res.status(200).json(pedidos);
  }

  async atualizarStatusPedido(req: Request, res: Response) {
    const { ped_Id } = req.params;
    const { ped_Status } = req.body;

    const atualizarStatusPedido = container.resolve(
      AtualizarStatusPedidoService,
    );

    const pedido = await atualizarStatusPedido.execute(ped_Id, ped_Status);

    return res.status(200).json(pedido);
  }

  async CreatePedido(req: Request, res: Response) {
    const { usu_Id, end_Id, frete, cartoes, chocolates, cupons } = req.body;

    const createPedido = container.resolve(CreatePedidoService);

    const pedido = await createPedido.execute({
      usu_Id,
      end_Id,
      frete,
      cartoes,
      chocolates,
      cupons,
    });

    return res.status(201).json(pedido);
  }

  async listByStatus(req: Request, res: Response) {
    const { page, limit } = req.query;
    const { ped_Status } = req.params;

    const listByStatus = container.resolve(ListByStatusService);

    const pedidos = await listByStatus.execute({
      page: Number(page),
      limit: Number(limit),
      filter: {
        ped_Status: ped_Status as StatusPedido,
      },
    });

    return res.status(200).json(pedidos);
  }
}

export { PedidoController };

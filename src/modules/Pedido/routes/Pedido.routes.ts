import { Router } from 'express';
import { PedidoController } from '../controller/PedidoController';
import {
  atualizarStatusPedidoMiddleware,
  createPedidoMiddleware,
  findPedidoByIdMiddleware,
  listByStatusMiddleware,
  listPedidoByUserIdMiddleware,
} from './validator/Pedido.validator';

const pedidorouter = Router();

const pedidoController = new PedidoController();

pedidorouter.get(
  '/:ped_Id',
  findPedidoByIdMiddleware,
  pedidoController.findPedidoById,
);

pedidorouter.get(
  '/user/:ped_usu_id',
  listPedidoByUserIdMiddleware,
  pedidoController.listPedidoByUserId,
);

pedidorouter.put(
  '/:ped_Id',
  atualizarStatusPedidoMiddleware,
  pedidoController.atualizarStatusPedido,
);

pedidorouter.post('/', createPedidoMiddleware, pedidoController.CreatePedido);

pedidorouter.get(
  '/status/:ped_Status',
  listByStatusMiddleware,
  pedidoController.listByStatus,
);

pedidorouter.post('/gerador', pedidoController.CreateMuitosPedidos);

export { pedidorouter };

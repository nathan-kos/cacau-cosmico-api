import { Router } from 'express';
import { TrocaDevolucaoController } from '../controller/TrocaDevolucao.controller';
import { createTrocaDevolucaoMiddleware } from './validator/TrocaDevolucao.validator';

const TrocaDevolucaoRoutes = Router();

const trocaDevolucaoController = new TrocaDevolucaoController();

TrocaDevolucaoRoutes.post(
  '/:tde_cho_ped_id',
  trocaDevolucaoController.createTrocaDevolucao,
  createTrocaDevolucaoMiddleware,
);

TrocaDevolucaoRoutes.put(
  '/:tde_Id/aceitacao',
  trocaDevolucaoController.aceitarTrocaDevolucao,
);

TrocaDevolucaoRoutes.put(
  '/:tde_Id/recusa',
  trocaDevolucaoController.recusarTrocaDevolucao,
);

TrocaDevolucaoRoutes.get(
  '/status/:status',
  trocaDevolucaoController.listTrocaDevolucao,
);

TrocaDevolucaoRoutes.get(
  '/chocolate-pedido/:tde_cho_ped_id',
  trocaDevolucaoController.listTrocaDevolucaoByChocolatePedido,
);

export { TrocaDevolucaoRoutes };

import { Router } from 'express';
import { CupomController } from '../controller/Cupom.controller';

const cupomRoutes = Router();

const cupomController = new CupomController();

// cupomRoutes.post('/', cupomController.create);

cupomRoutes.get('/code/:codigo', cupomController.findByCodigo);

cupomRoutes.get('/:cup_Id', cupomController.findById);

cupomRoutes.get('/chocolatePedido/:cho_ped_id', cupomController.findByChoPedId);

export { cupomRoutes };

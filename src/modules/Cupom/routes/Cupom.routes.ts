import { Router } from 'express';
import { CupomController } from '../controller/Cupom.controller';

const cupomRoutes = Router();

const cupomController = new CupomController();

// cupomRoutes.post('/', cupomController.create);

cupomRoutes.get('/:codigo', cupomController.findByCodigo);

export { cupomRoutes };

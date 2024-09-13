import { Router } from 'express';
import { ChocolateController } from '../controller/Chocolate.controller';

const chocolateRoutes = Router();

const chocolateController = new ChocolateController();

chocolateRoutes.get('/:cho_Id', chocolateController.findChocolateById);

chocolateRoutes.get('/', chocolateController.listAllAtivos);

chocolateRoutes.get('/:cat', chocolateController.listAllByCategoria);

chocolateRoutes.get('/pesquisa/:cho_Nome', chocolateController.listAllByName);

export { chocolateRoutes };

import { Router } from 'express';
import { ChocolateController } from '../controller/Chocolate.controller';

const chocolateRoutes = Router();

const chocolateController = new ChocolateController();

chocolateRoutes.get('/:cho_Id', chocolateController.findChocolateById);

chocolateRoutes.get('/', chocolateController.listAllAtivos);

chocolateRoutes.get('/categoria/:cat', chocolateController.listAllByCategoria);

chocolateRoutes.get('/pesquisar/:cho_Nome', chocolateController.listAllByName);

chocolateRoutes.get('/index', chocolateController.listIndex);

export { chocolateRoutes };

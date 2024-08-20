import { Router } from 'express';
import { EnderecoController } from '../controller/Endereco.controller';
import {
  createEnderecoMiddleware,
  deleteEnderecoMiddleware,
  listEnderecoMiddleware,
  showEnderecoMiddleware,
  updateEnderecoMiddleware,
} from './validators/Endereco.validator';

const enderecoRouter = Router();

const enderecoController = new EnderecoController();

enderecoRouter.post(
  '/:usu_Id/endereco',
  createEnderecoMiddleware,
  enderecoController.create,
);

enderecoRouter.put(
  '/:usu_Id/endereco/:end_Id',
  updateEnderecoMiddleware,
  enderecoController.update,
);

enderecoRouter.get(
  '/:usu_Id/endereco/:end_Id',
  showEnderecoMiddleware,
  enderecoController.show,
);

enderecoRouter.get(
  '/:usu_Id/endereco',
  listEnderecoMiddleware,
  enderecoController.list,
);

enderecoRouter.delete(
  '/:usu_Id/endereco/:end_Id',
  deleteEnderecoMiddleware,
  enderecoController.delete,
);

export { enderecoRouter };

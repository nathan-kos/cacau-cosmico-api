import { Router } from 'express';
import { CartaoController } from '../controller/Cartao.controller';
import {
  createCartaoMiddleware,
  deleteCartaoMiddleware,
  findByIdMiddleware,
  listCartaoMiddleware,
} from './Validator/Cartao.validator';

const cartaoRoutes = Router();

const cartaoController = new CartaoController();

cartaoRoutes.post(
  '/:usu_Id/cartao',
  createCartaoMiddleware,
  cartaoController.create,
);

cartaoRoutes.get(
  '/:usu_Id/cartao/:car_Id',
  findByIdMiddleware,
  cartaoController.findById,
);

cartaoRoutes.delete(
  '/:usu_Id/cartao/:car_Id',
  deleteCartaoMiddleware,
  cartaoController.delete,
);

cartaoRoutes.get(
  '/:usu_Id/cartao',
  listCartaoMiddleware,
  cartaoController.list,
);

export { cartaoRoutes };

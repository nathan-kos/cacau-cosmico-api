import { cartaoRoutes } from '@modules/Cartao/routes/Cartao.routes';
import { enderecoRouter } from '@modules/Endereco/routes/Endereco.routes';
import { Router } from 'express';
import { UserController } from '../controller/User.controller';
import {
  changePasswordMiddleware,
  createUserMiddleware,
  findByIdMiddleware,
  listUserMiddleware,
  updateUserMiddleware,
} from './validators/User.validator';

const userRouter = Router();

const userController = new UserController();

userRouter.use(enderecoRouter);

userRouter.use(cartaoRoutes);

userRouter.post('/', createUserMiddleware, userController.create);

userRouter.get('/:id', findByIdMiddleware, userController.FindById);

userRouter.delete('/:id', findByIdMiddleware, userController.DeleteUser);

userRouter.get('/', listUserMiddleware, userController.ListUser);

userRouter.put('/:usu_Id', updateUserMiddleware, userController.UpdateUser);

userRouter.put(
  '/:usu_Id/senha',
  changePasswordMiddleware,
  userController.ChangePassword,
);

export { userRouter };

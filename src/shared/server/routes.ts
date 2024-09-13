import { chocolateRoutes } from '@modules/Chocolate/routes/Chocolate.routes';
import { userRouter } from '@modules/User/routes/User.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/user', userRouter);

routes.use('/chocolate', chocolateRoutes);

routes.get('/', (request, response) => {
  response.send('Bem Vindo ao API rest da Cacau Cósmico 📚🚀🚀🚀');
});

export { routes };

import { chocolateRoutes } from '@modules/Chocolate/routes/Chocolate.routes';
import { cupomRoutes } from '@modules/Cupom/routes/Cupom.routes';
import { pedidorouter } from '@modules/Pedido/routes/Pedido.routes';
import { TrocaDevolucaoRoutes } from '@modules/Troca_Devolucao/router/TrocaDevolucao.routes';
import { userRouter } from '@modules/User/routes/User.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/user', userRouter);

routes.use('/chocolate', chocolateRoutes);

routes.use('/pedido', pedidorouter);

routes.use('/cupom', cupomRoutes);

routes.use('/troca-devolucao', TrocaDevolucaoRoutes);

routes.get('/', (request, response) => {
  response.send('Bem Vindo ao API rest da Cacau Cósmico 📚🚀🚀🚀');
});

export { routes };

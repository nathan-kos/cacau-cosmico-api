import { papelRoutes } from '@modules/Papel/routes/Papel.routes';
import { termoPrivacidadeRoutes } from '@modules/Termos-Privacidade/Routes/TermoPrivacidade.routes';
import { userRouter } from '@modules/User/routes/User.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/users', userRouter);

routes.use('/papel', papelRoutes);

routes.use('/termo', termoPrivacidadeRoutes);

routes.get('/', (request, response) => {
  response.send('Bem Vindo ao API rest da Cacau Cósmico 📚🚀🚀🚀');
});

export { routes };

import { Router } from 'express';
import { RelatorioController } from '../Controller/Relatorio.controller';

const relatorioRouter = Router();

const relatorioController = new RelatorioController();

relatorioRouter.get(
  '/:dataInicial/:dataFinal',
  relatorioController.getRelatorio,
);

export { relatorioRouter };

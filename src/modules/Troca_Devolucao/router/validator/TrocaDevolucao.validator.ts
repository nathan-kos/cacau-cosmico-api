import { celebrate, Joi } from 'celebrate';

export const createTrocaDevolucaoMiddleware = celebrate({
  body: {
    tde_Troca: Joi.boolean().required(),
    tde_Quantidade: Joi.number().required(),
  },
  params: {
    tde_cho_ped_id: Joi.string().uuid().required(),
  },
});

export const aceitarTrocaDevolucaoMiddleware = celebrate({
  params: {
    tde_Id: Joi.string().uuid().required(),
  },
});

export const recusarTrocaDevolucaoMiddleware = celebrate({
  params: {
    tde_Id: Joi.string().uuid().required(),
  },
});

export const listTrocaDevolucaoByChocolatePedidoMiddleware = celebrate({
  params: {
    tde_cho_ped_id: Joi.string().uuid().required(),
  },
});

export const listTrocaDevolucaoByStatusMiddleware = celebrate({
  query: {
    page: Joi.number().required(),
    limit: Joi.number().required(),
  },
  params: {
    status: Joi.string().required(),
  },
});

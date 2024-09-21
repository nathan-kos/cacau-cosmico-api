import { celebrate, Joi } from 'celebrate';

export const findPedidoByIdMiddleware = celebrate({
  params: {
    ped_Id: Joi.string().uuid().required(),
  },
});

export const listPedidoByUserIdMiddleware = celebrate({
  query: {
    page: Joi.number().required(),
    limit: Joi.number().required(),
  },

  params: {
    ped_usu_id: Joi.string().uuid().required(),
  },
});

export const atualizarStatusPedidoMiddleware = celebrate({
  params: {
    ped_Id: Joi.string().uuid().required(),
  },

  body: {
    ped_Status: Joi.string().required(),
  },
});

export const createPedidoMiddleware = celebrate({
  body: {
    usu_Id: Joi.string().uuid().required(),
    end_Id: Joi.string().uuid().required(),
    frete: Joi.number().required(),
    cartoes: Joi.array().items(
      Joi.object().keys({
        car_Id: Joi.string().uuid().required(),
        car_Valor: Joi.number().required(),
      }),
    ),
    chocolates: Joi.array().items(
      Joi.object().keys({
        cho_Id: Joi.string().uuid().required(),
        quantidade: Joi.number().required(),
      }),
    ),
    // objeto com string cup_Id
    cupons: Joi.array()
      .items(
        Joi.object().keys({
          cup_Id: Joi.string().uuid().required(),
        }),
      )
      .required(),
  },
});

export const listByStatusMiddleware = celebrate({
  query: {
    page: Joi.number().required(),
    limit: Joi.number().required(),
  },

  params: {
    ped_Status: Joi.string().required(),
  },
});

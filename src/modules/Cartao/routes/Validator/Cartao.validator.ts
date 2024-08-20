import { celebrate, Joi } from 'celebrate';

export const createCartaoMiddleware = celebrate({
  body: {
    car_Nome: Joi.string().required(),
    car_Numero: Joi.string().required(),
    car_CVV: Joi.string().required(),
    car_Validade: Joi.string().required(),
    car_Bandeira: Joi.string().required(),
  },

  params: {
    usu_Id: Joi.string().uuid().required(),
  },
});

export const findByIdMiddleware = celebrate({
  params: {
    usu_Id: Joi.string().uuid().required(),
    car_Id: Joi.string().uuid().required(),
  },
});

export const deleteCartaoMiddleware = celebrate({
  params: {
    usu_Id: Joi.string().uuid().required(),
    car_Id: Joi.string().uuid().required(),
  },
});

export const listCartaoMiddleware = celebrate({
  query: {
    page: Joi.number().required(),
    limit: Joi.number().required(),
  },

  params: {
    usu_Id: Joi.string().uuid().required(),
  },
});

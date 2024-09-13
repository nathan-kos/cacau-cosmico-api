import { celebrate, Joi } from 'celebrate';

export const findChocolateByIdMiddleware = celebrate({
  params: {
    cho_Id: Joi.string().uuid().required(),
  },
});

export const listAllAtivosMiddleware = celebrate({
  query: {
    page: Joi.number().required(),
    limit: Joi.number().required(),
  },
});

export const listAllByCategoriaMiddleware = celebrate({
  query: {
    page: Joi.number().required(),
    limit: Joi.number().required(),
  },

  params: {
    cat: Joi.string().required(),
  },
});

export const listAllByNameMiddleware = celebrate({
  query: {
    page: Joi.number().required(),
    limit: Joi.number().required(),
  },

  params: {
    cho_Nome: Joi.string().required(),
  },
});

import { celebrate, Joi } from 'celebrate';

export const findByCodigoMiddleware = celebrate({
  params: {
    codigo: Joi.string().required(),
  },
});

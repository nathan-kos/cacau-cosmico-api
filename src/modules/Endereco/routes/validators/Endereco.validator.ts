import { celebrate, Joi } from 'celebrate';

export const createEnderecoMiddleware = celebrate({
  body: {
    end_Rua: Joi.string().required(),
    end_Numero: Joi.string().required(),
    end_Bairro: Joi.string().required(),
    end_CEP: Joi.string().required(),
    end_Cidade: Joi.string().required(),
    end_UF: Joi.string().required(),
    end_Complemento: Joi.string().optional(),
    end_Tipo: Joi.string().required(),
  },
  params: {
    usu_Id: Joi.string().uuid().required(),
  },
});

export const updateEnderecoMiddleware = celebrate({
  body: {
    end_Rua: Joi.string().required(),
    end_Numero: Joi.string().required(),
    end_Bairro: Joi.string().required(),
    end_CEP: Joi.string().required(),
    end_Cidade: Joi.string().required(),
    end_UF: Joi.string().required().length(2),
    end_Complemento: Joi.string().optional(),
    end_Tipo: Joi.string().required(),
  },
  params: {
    usu_Id: Joi.string().uuid().required(),
    end_Id: Joi.string().uuid().required(),
  },
});

export const showEnderecoMiddleware = celebrate({
  params: {
    usu_Id: Joi.string().uuid().required(),
    end_Id: Joi.string().uuid().required(),
  },
});

export const deleteEnderecoMiddleware = celebrate({
  params: {
    usu_Id: Joi.string().uuid().required(),
    end_Id: Joi.string().uuid().required(),
  },
});

export const listEnderecoMiddleware = celebrate({
  params: {
    usu_Id: Joi.string().uuid().required(),
  },
});

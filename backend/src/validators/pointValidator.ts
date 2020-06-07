import { Joi, celebrate } from 'celebrate';

export default celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.number().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
    items: Joi.string().required(),
    image: Joi.required(),
  }),
});

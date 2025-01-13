import Joi, { ObjectSchema } from 'joi';

export const CarouselSchema: ObjectSchema = Joi.object().keys({
  title: Joi.string().required().messages({
    'string.base': 'title must be of type string.',
    'string.min': 'title must be 3 characters.',
    'string.max': 'title must be less then 8 characters.',
    'string.empty': 'title is a required field.'
  }),
  subTitle: Joi.string().optional().messages({
    'string.base': 'subTitle must be of type string.',
    'string.email': 'subTitle must be valid.',
    'string.empty': 'subTitle is a required field.'
  }),
  description: Joi.string().optional().messages({
    'string.base': 'description must be of type string.',
    'string.email': 'description must be valid.',
    'string.empty': 'description is a required field.',
    'string.min': 'description invalid'
  }),
  imageUrl: Joi.string().optional().messages({
    'string.base': 'imageUrl must be of type string.',
    'string.email': 'imageUrl must be valid.',
    'string.empty': 'imageUrl is a required field.'
  })
});

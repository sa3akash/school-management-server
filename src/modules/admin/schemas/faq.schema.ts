import Joi, { ObjectSchema } from 'joi';

export const FaqSchema: ObjectSchema = Joi.object().keys({
  FAQsPostQuestion: Joi.string().required().messages({
    'string.base': 'FAQsPostQuestion must be of type string.',
    'string.min': 'FAQsPostQuestion must be 3 characters.',
    'string.max': 'FAQsPostQuestion must be less then 8 characters.',
    'string.empty': 'FAQsPostQuestion is a required field.'
  }),
  FAQsPostAnswer: Joi.string().required().messages({
    'string.base': 'FAQsPostAnswer must be of type string.',
    'string.email': 'FAQsPostAnswer must be valid.',
    'string.empty': 'FAQsPostAnswer is a required field.'
  }),
});

export const FeedBackSchema: ObjectSchema = Joi.object().keys({
  name: Joi.string().required().messages({
    'string.base': 'name must be of type string.',
    'string.min': 'name must be 3 characters.',
    'string.max': 'name must be less then 8 characters.',
    'string.empty': 'name is a required field.'
  }),
  review: Joi.string().required().messages({
    'string.base': 'review must be of type string.',
    'string.email': 'review must be valid.',
    'string.empty': 'review is a required field.'
  }),

  rating: Joi.number().required().messages({
    'string.base': 'review must be of type string.',
    'string.email': 'review must be valid.',
    'string.empty': 'review is a required field.'
  }),
});

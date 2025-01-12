import Joi, { ObjectSchema } from 'joi';

export const SignUpSchema: ObjectSchema = Joi.object().keys({
  name: Joi.string().required().min(3).max(150).messages({
    'string.base': 'Name must be of type string.',
    'string.min': 'Name must be 3 characters.',
    'string.max': 'Name must be less then 8 characters.',
    'string.empty': 'Name is a required field.'
  }),
  email: Joi.string().required().email().messages({
    'string.base': 'Email must be of type string.',
    'string.email': 'Email must be valid.',
    'string.empty': 'Email is a required field.'
  }),
  phoneNumber: Joi.string().required().min(10).messages({
    'string.base': 'Phone number must be of type string.',
    'string.email': 'Phone number must be valid.',
    'string.empty': 'Phone number is a required field.',
    'string.min': 'Phone number invalid'
  }),
  password: Joi.string().required().messages({
    'string.base': 'Password must be of type string.',
    'string.email': 'Password must be valid.',
    'string.empty': 'Password is a required field.'
  })
});

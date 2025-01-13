import Joi, { ObjectSchema } from 'joi';

export const AdmissionSchema: ObjectSchema = Joi.object().keys({
  studentName: Joi.string().required().messages({
    'string.base': 'studentName must be of type string.',
    'string.min': 'studentName must be 3 characters.',
    'string.max': 'studentName must be less then 8 characters.',
    'string.empty': 'studentName is a required field.'
  }),
  email: Joi.string().optional().messages({
    'string.base': 'email must be of type string.',
    'string.email': 'email must be valid.',
    'string.empty': 'email is a required field.'
  }),
  phoneNumber: Joi.string().optional().messages({
    'string.base': 'phoneNumber must be of type string.',
    'string.email': 'phoneNumber must be valid.',
    'string.empty': 'phoneNumber is a required field.',
    'string.min': 'phoneNumber invalid'
  }),
  age: Joi.number().required().messages({
    'string.base': 'age must be of type string.',
    'string.email': 'age must be valid.',
    'string.empty': 'age is a required field.'
  }),
  comment: Joi.string().optional().messages({
    'string.base': 'comment must be of type string.',
    'string.email': 'comment must be valid.',
    'string.empty': 'comment is a required field.'
  }),
});

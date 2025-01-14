import mongoose from 'mongoose';
import { IFAQDocument } from '@admin/interfaces/carousel.interface';

const FaqSchema = new mongoose.Schema<IFAQDocument>(
  {
    FAQsPostQuestion: { type: String, required: true,unique: true },
    FAQsPostAnswer: { type: String, required: true },

  },
  {
    timestamps: true
  }
);

export const FAQModel = mongoose.model('FAQ', FaqSchema, 'FAQ');

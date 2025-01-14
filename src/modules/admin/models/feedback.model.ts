import mongoose from 'mongoose';
import { IFeedBackDocument } from '@admin/interfaces/carousel.interface';

const FeedBackSchema = new mongoose.Schema<IFeedBackDocument>(
  {
    name: { type: String, required: true,unique: true },
    review: { type: String, required: true },
    rating: { type: Number, required: true },

  },
  {
    timestamps: true
  }
);

export const FeedBackModel = mongoose.model('FeedBack', FeedBackSchema, 'FeedBack');

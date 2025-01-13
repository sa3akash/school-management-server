import mongoose from 'mongoose';
import { ICarouselDocument } from '@admin/interfaces/carousel.interface';

const CarouselSchema = new mongoose.Schema<ICarouselDocument>(
  {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String
    },
    description: {
      type: String
    },
    imageUrl: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export const CarouselModel = mongoose.model('Carousel', CarouselSchema, 'Carousel');

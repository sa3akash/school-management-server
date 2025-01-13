import { auth } from '@middleware/auth';
import { Request, Response } from 'express';
import { joiValidation } from '@middleware/joiValidation';
import { ServerError } from 'error-express';
import { CarouselSchema } from '@admin/schemas/carousel.schema';
import { CarouselModel } from '@admin/models/carousel.model';

export class CarouselController {
  @auth('admin','moderator')
  @joiValidation(CarouselSchema)
  public async addCarousel(req: Request, res: Response) {

    const alreadyCarousel = await CarouselModel.findOne({
      title: req.body.title
    });

    if (alreadyCarousel) {
      throw new ServerError('Subject already exists', 400);
    }

    const createNew = await CarouselModel.create(req.body);

    res.status(201).json({
      message: 'Carousel created.',
      data: createNew
    });
  }
}

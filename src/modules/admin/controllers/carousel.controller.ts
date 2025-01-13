import { auth } from '@middleware/auth';
import { Request, Response } from 'express';
import { joiValidation } from '@middleware/joiValidation';
import { ServerError } from 'error-express';
import { CarouselSchema } from '@admin/schemas/carousel.schema';
import { CarouselModel } from '@admin/models/carousel.model';

export class CarouselController {
  @auth('admin', 'moderator')
  @joiValidation(CarouselSchema)
  public async addCarousel(req: Request, res: Response) {
    const alreadyCarousel = await CarouselModel.findOne({
      title: req.body.title
    });

    if (alreadyCarousel) {
      throw new ServerError('Carousel already exists', 400);
    }

    const createNew = await CarouselModel.create(req.body);

    res.status(201).json({
      message: 'Carousel created.',
      data: createNew
    });
  }

  @auth('admin', 'moderator')
  @joiValidation(CarouselSchema)
  public async updateCarousel(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) {
      throw new ServerError('Id required', 400);
    }

    const alreadyCarousel = await CarouselModel.findById(id);

    if (!alreadyCarousel) {
      throw new ServerError('Carousel does not exists', 404);
    }

    const createNew = await CarouselModel.findByIdAndUpdate(
      id,
      {
        $set: req.body
      },
      { new: true }
    );

    res.status(200).json({
      message: 'update carousel.',
      data: createNew
    });
  }

  @auth('admin', 'moderator')
  public async deleteCarousel(req: Request, res: Response) {
    const id = req.params.id;

    if (!id) {
      throw new ServerError('Id required', 400);
    }

    await CarouselModel.findByIdAndDelete(id);

    res.status(200).json({
      message: 'deleted carousel.'
    });
  }

  @auth('admin', 'moderator')
  public async getSingle(req: Request, res: Response) {
    const id = req.params.id;

    if (!id) {
      throw new ServerError('Id required', 400);
    }

    const alreadyCarousel = await CarouselModel.findById(id);

    res.status(200).json({
      message: 'deleted carousel.',
      data: alreadyCarousel
    });
  }

  @auth('admin', 'moderator')
  public async getAll(req: Request, res: Response) {
    const alreadyCarousel = await CarouselModel.find();

    res.status(200).json({
      message: 'deleted carousel.',
      data: alreadyCarousel
    });
  }
}

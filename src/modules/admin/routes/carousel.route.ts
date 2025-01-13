import express from 'express';
import { CarouselController } from '@admin/controllers/carousel.controller';

class CarouselRoute {
  private readonly router: express.Router;
  constructor() {
    this.router = express.Router();
  }

  public routes(): express.Router {
    this.router.post('/create', CarouselController.prototype.addCarousel);
    this.router.put('/update/:id', CarouselController.prototype.updateCarousel);
    this.router.delete('/delete/:id', CarouselController.prototype.deleteCarousel);
    this.router.get('/getSingle/:id', CarouselController.prototype.getSingle);
    this.router.get('/get/all', CarouselController.prototype.getAll);

    return this.router;
  }
}

export const carouselRoute: CarouselRoute = new CarouselRoute();

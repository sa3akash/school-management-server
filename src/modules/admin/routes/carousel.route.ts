import express from 'express';
import { SubjectController } from '@admin/controllers/subject.controller';

class CarouselRoute {
  private readonly router: express.Router;
  constructor() {
    this.router = express.Router();
  }

  public routes(): express.Router {
    this.router.post('/create', SubjectController.prototype.addSubject);

    return this.router;
  }
}

export const carouselRoute: CarouselRoute = new CarouselRoute();

import express from 'express';
import { FaqController } from '@admin/controllers/faq.controller';

class FaqRoute {
  private readonly router: express.Router;
  constructor() {
    this.router = express.Router();
  }

  public routes(): express.Router {
    this.router.post('/add', FaqController.prototype.addQuestion);
    this.router.put('/update/:id', FaqController.prototype.updateFaq);
    this.router.delete('/delete/:id', FaqController.prototype.deleteFAq);
    this.router.get('/getSingle/:id', FaqController.prototype.getSingle);
    this.router.get('/get/all', FaqController.prototype.getAll);

    return this.router;
  }
}

export const faqRoute: FaqRoute = new FaqRoute();

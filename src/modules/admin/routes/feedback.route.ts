import express from 'express';
import { FeedBackController } from '@admin/controllers/feedback.controller';

class FeedbackRoute {
  private readonly router: express.Router;
  constructor() {
    this.router = express.Router();
  }

  public routes(): express.Router {
    this.router.post('/add', FeedBackController.prototype.addFeedBack);
    this.router.put('/update/:id', FeedBackController.prototype.updateFeedback);
    this.router.delete('/delete/:id', FeedBackController.prototype.deleteFeedback);
    this.router.get('/getSingle/:id', FeedBackController.prototype.getSingle);
    this.router.get('/get/all', FeedBackController.prototype.getAll);

    return this.router;
  }
}

export const feedbackRoute: FeedbackRoute = new FeedbackRoute();

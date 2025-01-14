import { auth } from '@middleware/auth';
import { Request, Response } from 'express';
import { joiValidation } from '@middleware/joiValidation';
import { ServerError } from 'error-express';
import { FeedBackSchema } from '@admin/schemas/faq.schema';
import { FeedBackModel } from '@admin/models/feedback.model';

export class FeedBackController {
  @auth('admin', 'moderator')
  @joiValidation(FeedBackSchema)
  public async addFeedBack(req: Request, res: Response) {

    const createNew = await FeedBackModel.create(req.body);

    res.status(201).json({
      message: 'Feedback created.',
      data: createNew
    });
  }

  @auth('admin', 'moderator')
  @joiValidation(FeedBackSchema)
  public async updateFeedback(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) {
      throw new ServerError('Id required', 400);
    }

    const alreadyFeedback = await FeedBackModel.findById(id);

    if (!alreadyFeedback) {
      throw new ServerError('Feedback does not exists', 404);
    }

    const createNew = await FeedBackModel.findByIdAndUpdate(
      id,
      {
        $set: req.body
      },
      { new: true }
    );

    res.status(200).json({
      message: 'update Feedback.',
      data: createNew
    });
  }

  @auth('admin', 'moderator')
  public async deleteFeedback(req: Request, res: Response) {
    const id = req.params.id;

    if (!id) {
      throw new ServerError('Id required', 400);
    }

    await FeedBackModel.findByIdAndDelete(id);

    res.status(200).json({
      message: 'deleted Feedback.'
    });
  }

  @auth('admin', 'moderator')
  public async getSingle(req: Request, res: Response) {
    const id = req.params.id;

    if (!id) {
      throw new ServerError('Id required', 400);
    }

    const getSingleFaq = await FeedBackModel.findById(id);

    res.status(200).json({
      message: 'get Feedback.',
      data: getSingleFaq
    });
  }

  @auth('admin', 'moderator')
  public async getAll(req: Request, res: Response) {
    const feedbackGetAll = await FeedBackModel.find();

    res.status(200).json({
      message: 'get all carousel.',
      data: feedbackGetAll
    });
  }
}

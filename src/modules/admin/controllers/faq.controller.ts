import { auth } from '@middleware/auth';
import { Request, Response } from 'express';
import { joiValidation } from '@middleware/joiValidation';
import { ServerError } from 'error-express';
import { FaqSchema } from '@admin/schemas/faq.schema';
import { FAQModel } from '@admin/models/faq.model';

export class FaqController {
  @auth('admin', 'moderator')
  @joiValidation(FaqSchema)
  public async addQuestion(req: Request, res: Response) {
    const alreadyThisQuestion = await FAQModel.findOne({
      FAQsPostQuestion: req.body.FAQsPostQuestion
    });

    if (alreadyThisQuestion) {
      throw new ServerError('Faq already exists', 400);
    }

    const createNew = await FAQModel.create(req.body);

    res.status(201).json({
      message: 'FAQ created.',
      data: createNew
    });
  }

  @auth('admin', 'moderator')
  @joiValidation(FaqSchema)
  public async updateFaq(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) {
      throw new ServerError('Id required', 400);
    }

    const alreadyFAq = await FAQModel.findById(id);

    if (!alreadyFAq) {
      throw new ServerError('FAq does not exists', 404);
    }

    const createNew = await FAQModel.findByIdAndUpdate(
      id,
      {
        $set: req.body
      },
      { new: true }
    );

    res.status(200).json({
      message: 'update FAq.',
      data: createNew
    });
  }

  @auth('admin', 'moderator')
  public async deleteFAq(req: Request, res: Response) {
    const id = req.params.id;

    if (!id) {
      throw new ServerError('Id required', 400);
    }

    await FAQModel.findByIdAndDelete(id);

    res.status(200).json({
      message: 'deleted faq.'
    });
  }

  @auth('admin', 'moderator')
  public async getSingle(req: Request, res: Response) {
    const id = req.params.id;

    if (!id) {
      throw new ServerError('Id required', 400);
    }

    const getSingleFaq = await FAQModel.findById(id);

    res.status(200).json({
      message: 'get faq.',
      data: getSingleFaq
    });
  }

  @auth('admin', 'moderator')
  public async getAll(req: Request, res: Response) {
    const faqGetAll = await FAQModel.find();

    res.status(200).json({
      message: 'get all carousel.',
      data: faqGetAll
    });
  }
}

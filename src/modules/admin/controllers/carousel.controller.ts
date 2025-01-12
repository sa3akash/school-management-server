import { auth } from '@middleware/auth';
import { Request, Response } from 'express';
import { joiValidation } from '@middleware/joiValidation';
import { subjectModel } from '@admin/models/subject.model';
import { ServerError } from 'error-express';
import {SubjectSchema} from "@admin/schemas/subject.schema";

export class CarouselController {
  @auth('admin')
  @joiValidation(SubjectSchema)
  public async addCarousel(req: Request, res: Response) {
    const { subjectName, classId } = req.body;

    const alreadySubject = await subjectModel.findOne({
      subjectName: subjectName
    });

    if (alreadySubject) {
      throw new ServerError('Subject already exists', 400);
    }

    const createNew = await subjectModel.create({
      subjectName,
      classId
    });

    res.status(201).json({
      message: 'Subject created.',
      data: createNew
    });
  }
}

import { auth } from '@middleware/auth';
import { Request, Response } from 'express';
import { joiValidation } from '@middleware/joiValidation';
import { ServerError } from 'error-express';
import { CarouselModel } from '@admin/models/carousel.model';
import { AdmissionModel } from '@admin/models/admission.model';
import { AdmissionSchema } from '@admin/schemas/admission.schema';

export class AdmissionController {
  @auth('admin', 'moderator')
  @joiValidation(AdmissionSchema)
  public async create(req: Request, res: Response) {

    const createNew = await AdmissionModel.create(req.body);

    res.status(201).json({
      message: 'Admission created.',
      data: createNew
    });
  }

  @auth('admin', 'moderator')
  @joiValidation(AdmissionSchema)
  public async updateAdmission(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) {
      throw new ServerError('Id required', 400);
    }

    const alreadyAdmission = await AdmissionModel.findById(id);

    if (!alreadyAdmission) {
      throw new ServerError('Admission does not exists', 404);
    }

    const createNew = await AdmissionModel.findByIdAndUpdate(
      id,
      {
        $set: req.body
      },
      { new: true }
    );

    res.status(200).json({
      message: 'update admission.',
      data: createNew
    });
  }

  @auth('admin', 'moderator')
  public async deleteAdmission(req: Request, res: Response) {
    const id = req.params.id;

    if (!id) {
      throw new ServerError('Id required', 400);
    }

    await AdmissionModel.findByIdAndDelete(id);

    res.status(200).json({
      message: 'deleted created.'
    });
  }

  @auth('admin', 'moderator')
  public async getSingle(req: Request, res: Response) {
    const id = req.params.id;

    if (!id) {
      throw new ServerError('Id required', 400);
    }

    const getSingleAdmission = await AdmissionModel.findById(id);

    res.status(200).json({
      message: 'deleted created.',
      data: getSingleAdmission
    });
  }

  @auth('admin', 'moderator')
  public async getAll(req: Request, res: Response) {

    const getAllAdmission = await AdmissionModel.find();

    res.status(200).json({
      message: 'deleted created.',
      data: getAllAdmission
    });
  }
}

import express from 'express';
import { AdmissionController } from '@admin/controllers/admission.controller';

class AdmissionRoute {
  private readonly router: express.Router;
  constructor() {
    this.router = express.Router();
  }

  public routes(): express.Router {
    this.router.post('/create', AdmissionController.prototype.create);
    this.router.put('/update/:id', AdmissionController.prototype.updateAdmission);
    this.router.delete('/delete/:id', AdmissionController.prototype.deleteAdmission);
    this.router.get('/getSingle/:id', AdmissionController.prototype.getSingle);
    this.router.get('/get/all', AdmissionController.prototype.getAll);

    return this.router;
  }
}

export const admissionRoute: AdmissionRoute = new AdmissionRoute();

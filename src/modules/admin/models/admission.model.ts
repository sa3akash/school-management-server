import mongoose from 'mongoose';
import { IAdmissionDocument } from '@admin/interfaces/carousel.interface';

const AdmissionSchema = new mongoose.Schema<IAdmissionDocument>(
  {
    studentName: { type: String, required: true },
    age: { type: Number, required: true },
    comment: { type: String },
    email: { type: String },
    phoneNumber: { type: String }
  },
  {
    timestamps: true
  }
);

export const AdmissionModel = mongoose.model('Admission', AdmissionSchema, 'Admission');

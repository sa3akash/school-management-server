

export interface ICarouselDocument {
  _id: string;
  title: string;
  subTitle: string;
  description: string;
  imageUrl: string;
}

export interface IAdmissionDocument {
  _id: string;
  studentName: string;
  email: string;
  phoneNumber: string;
  age: number
  comment: string;
}

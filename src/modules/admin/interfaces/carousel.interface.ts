

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

export interface IFAQDocument {
  _id: string;
  FAQsPostQuestion: string;
  FAQsPostAnswer: string;
}

export interface IFeedBackDocument {
  _id: string;
  name: string;
  review: string;
  rating: number;
}

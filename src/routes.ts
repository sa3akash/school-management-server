import { Application } from 'express';
import { studentRoute } from '@student/routes/createStudent.route';
import { adminRoute } from '@admin/routes/auth.route';
import { teacherRoute } from '@teacher/routes/teacher.route';
import { classRoute } from '@admin/routes/class.route';
import { subjectRoute } from '@admin/routes/subject.route';
import { carouselRoute } from '@admin/routes/carousel.route';
import { admissionRoute } from '@admin/routes/admission.route';
import { faqRoute } from '@admin/routes/faq.route';

export default (app: Application) => {
  const routes = () => {
    app.use('/api/v1/admin', adminRoute.routes());
    app.use('/api/v1/student', studentRoute.routes());
    app.use('/api/v1/teacher', teacherRoute.routes());
    app.use('/api/v1/class', classRoute.routes());
    app.use('/api/v1/subject', subjectRoute.routes());
    app.use('/api/v1/carousel', carouselRoute.routes());
    app.use('/api/v1/admission', admissionRoute.routes());
    app.use('/api/v1/faq', faqRoute.routes());
  };

  routes();
};

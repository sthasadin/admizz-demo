import { getService } from "../commonServices";

export class TestimonialService {
  getAllTestimonial() {
    const url = `/testimonials`;
    const data = getService(url);
    return data;
  }
  getStudentTestimonial(setYears, setDefault, setpagination) {
    const url = `/testimonials?type=Student&year=${setYears}&filterBy=${setDefault}&limit=${setpagination}`;
    const data = getService(url);
    return data;
  }
  getUniversityTestimonial() {
    const url = `/testimonials?type=University`;
    const data = getService(url);
    return data;
  }
  getTestimonial(_id) {
    const url = `/testimonials/${_id}`;
    const data = getService(url);
    return data;
  }
  getTestimonialYear() {
    const url = `/testimonials/years`;
    const data = getService(url);
    return data;
  }
}

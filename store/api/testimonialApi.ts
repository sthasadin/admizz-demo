import { getService } from "../commonServices";

export class TestimonialService {
    getAllTestimonial(){
        let url = `/testimonials`;
        let data = getService(url);
        return data;
    }
    getStudentTestimonial(setYears,setDefault,setpagination){
        let url = `/testimonials?type=Student&year=${setYears}&filterBy=${setDefault}&limit=${setpagination}`;
        let data = getService(url);
        return data;
    }
    getUniversityTestimonial(){
        let url = `/testimonials?type=University`;
        let data = getService(url);
        return data;
    }
    getTestimonial(_id){
        let url = `/testimonials/${_id}`;
        let data = getService(url);
        return data;

    }
    getTestimonialYear(){
        let url = `/testimonials/years`;
        let data = getService(url);
        return data;
    }
    
}
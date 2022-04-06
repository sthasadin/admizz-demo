import { postService, getService } from "../commonServices";

export class TestimonialService {
    getTestimonial(){
        let url = `/testimonials`;
        let data = getService(url);
        return data;
    }
    
}
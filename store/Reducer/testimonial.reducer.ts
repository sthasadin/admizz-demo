import {TESTIMONIAL_TYPES } from "../const";

const initialState = {
    universityTestimonial : [],
    universityYear:[],
    studentTestimonial:[]
}

export default (state = initialState,{type,payload} ) =>{
    switch(type){
        case TESTIMONIAL_TYPES.GET_UNIVERSITY_TESTIMONIAL:
            return{
                universityTestimonial:payload
            };
            case TESTIMONIAL_TYPES.GET_YEAR_LIST:
                return{
                    universityYear:payload

                }
                case TESTIMONIAL_TYPES.GET_STUDENT_TESTIMONIAL:
                    return{
                        studentTestimonial:payload
                    };
                    
            default:
                return state
    }
}
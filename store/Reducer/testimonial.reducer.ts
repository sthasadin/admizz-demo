import {TESTIMONIAL_TYPES } from "../const";

const initialState = {
    universityTestimonial : [],
    universityYear:[]
}

export default (state = initialState,{type,payload} ) =>{
    switch(type){
        case TESTIMONIAL_TYPES.GET_TESTIMONIAL:
            return{
                universityTestimonial:payload
            };
            case TESTIMONIAL_TYPES.GET_YEAR_LIST:
                return{
                    universityYear:payload

                }
            default:
                return state
    }
}
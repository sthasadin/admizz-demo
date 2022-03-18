import {TESTIMONIAL_TYPES } from "../const";

const initialState = {
    universityTestimonial : []
}

export default (state = initialState,{type,payload} ) =>{
    switch(type){
        case TESTIMONIAL_TYPES.GET_TESTIMONIAL:
            return{
                universityTestimonial:payload
            }
            default:
                return state
    }
}
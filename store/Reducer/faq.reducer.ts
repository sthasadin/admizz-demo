import { FAQ_TYPES } from "../const";


const initialState = {
    faq : {},
    faqs: [],
}

export default (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case FAQ_TYPES.GET_FAQ: 
            return {
                ...state,
                faq:payload
            }
        case FAQ_TYPES.GET_FAQS:
            return {
                ...state,
                faqs: payload,
            };
        case FAQ_TYPES.CREATE_FAQ:
            return {
                ...state,
                faq: payload
            };
        case FAQ_TYPES.DELETE_FAQ:
            return {
            ...state,
            faq: payload
        }
        default:
            return state;
    }
}

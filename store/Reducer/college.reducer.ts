import { COLLEGES_TYPES, COLLEGE_TYPES } from "../const";


const initialState = {
    college : {},
    colleges: [],
    multiLoading: false,
    singleLoading: false,
}

export default (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case COLLEGES_TYPES.GET_COLLEGES:
            return {
                ...state,
                colleges: payload,
            };
        case COLLEGE_TYPES.GET_COLLEGE:
            return {
                ...state,
                college: payload,
                singleLoading: false
            };
        case COLLEGES_TYPES.GET_COLLEGES_INIT:
            return {
            ...state,
            multiLoading: true,
        }
        case COLLEGES_TYPES.GET_COLLEGES_FINISH:
            return {
            ...state,
            multiLoading: false
        }
        case COLLEGE_TYPES.GET_COLLEGE_FINISH:
            return {
            ...state,
            singleLoading: false
        }
        case COLLEGE_TYPES.GET_COLLEGE_INIT:
            return {
                ...state,
                singleLoading: true,
                college: {}
            }
        default:
            return state;
    }
}

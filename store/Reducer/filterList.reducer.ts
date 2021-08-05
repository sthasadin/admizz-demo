import {
    GET_COUNTY_LIST_BEGIN, GET_COUNTRY_LIST, GET_COURSE_LEVEL_LIST_BEGIN, GET_COURSE_LEVEL_LIST, GET_STATE_LIST_BEGIN, GET_STATE_LIST, GET_CITY_LIST_BEGIN, GET_CITY_LIST
} from '../const'


const inititalState = {
    countryList: [],
    loader: false,
    courseLevelList: [],
    stateList: [],
    cityList: []

};

const userReducer = (state = inititalState, { type, payload }) => {

    switch (type) {
        case GET_COUNTY_LIST_BEGIN:
            return {
                ...state,
                loader: true
            }
        case GET_COUNTRY_LIST:
            return {
                ...state,
                countryList: payload,
                loader: false
            }
        case GET_COURSE_LEVEL_LIST_BEGIN:
            return {
                ...state,
                loader: true
            }
        case GET_COURSE_LEVEL_LIST:
            return {
                ...state,
                courseLevelList: payload,
                loader: false
            }
        case GET_STATE_LIST_BEGIN:
            return {
                ...state,
                loader: true
            }
        case GET_STATE_LIST:
            return {
                ...state,
                stateList: payload,
                loader: false
            }
        case GET_CITY_LIST_BEGIN:
            return {
                ...state,
                loader: true,
            }
        case GET_CITY_LIST:
            return {
                ...state,
                cityList: payload,
                loader: false

            }
        default:
            return state;
    }
}

export default userReducer
import { GET_COLLAGE_DETAIL } from "../const"

const initialState = {
    collageDetails : []
};

export default  (state = initialState, {type, payload} ) =>{
    switch(type){
        case GET_COLLAGE_DETAIL:
            return{
                collageDetails : payload
            }
        default :
            return state
    }
}
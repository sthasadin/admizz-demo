import { 
    FAVOURITES,
} from "../const";

const initialState = {
    userFavorite: []
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
    case FAVOURITES.USER_FAVOURITES:
        return {
            ...state,
            userFavorite: payload,
        }
    default:
        return state
    }
}

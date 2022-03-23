import {Dispatch} from "redux";
import { FAVOURITES } from "../const";
import {finish, init, success, error} from "../commonActions";
import { favouritesService } from "../api/favouriteApi";

const FavouritesService = new favouritesService();

export const getFavourites = (userid : String) => async (dispatch: Dispatch) => {
    dispatch(init(FAVOURITES.USER_FAVOURITES));
    const response = await FavouritesService.getFavourites(userid);
    dispatch(finish(FAVOURITES.USER_FAVOURITES));

    if(response.isSuccess) {
        dispatch(success(FAVOURITES.USER_FAVOURITES, response.data));
    } else if (!response.isSuccess) {
        dispatch(error(response.errorMessage));
    }
}

export const addToFavourites = (favdata : any) => async(dispatch : Dispatch) => {
    dispatch(init(FAVOURITES.ADD_TO_FAVOURITES));
    const response = await FavouritesService.addToFavourite(favdata);
    dispatch(finish(FAVOURITES.ADD_TO_FAVOURITES));

    if(response.isSuccess) {
        dispatch(success(FAVOURITES.ADD_TO_FAVOURITES, response.data));
    } else if (!response.isSuccess) {
        dispatch(error(response.errorMessage));
    }
}

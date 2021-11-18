import { Favourites } from "@/components/Favourites";
import { postService, getService } from "../commonServices";

export class favouritesService {
    getFavourites(userid : String) {
        let url = `/favourites/${userid}`;
        let data = getService(url);
        return data;
    }

    addToFavourite(favdata : String) {
        let body = favdata;
        let url = "/favourites";
        let data = postService(url, body);
        return data;
    }
}
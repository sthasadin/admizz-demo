import { Favourites } from "@/components/Favourites";
import { postService, getService } from "../commonServices";

export class favouritesService {
  getFavourites(userid: string) {
    const url = `/favourites/${userid}`;
    const data = getService(url);
    return data;
  }

  addToFavourite(favdata: string) {
    const body = favdata;
    const url = "/favourites";
    const data = postService(url, body);
    return data;
  }

  removeFromFavourite(favdata: string) {
    const body = favdata;
    const url = "/favourites";
    const data = postService(url, body);
    return data;
  }
}

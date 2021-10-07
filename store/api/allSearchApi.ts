import { postService } from "../commonServices";
export class AllSearchService {
  getAllItem(keyword) {
    let body = keyword;
    let url = `/search/all-search`;
    let data = postService(url, body);
    return data;
  }
}

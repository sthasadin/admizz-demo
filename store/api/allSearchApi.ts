import { postService } from "../commonServices";
export class AllSearchService {
  getAllItem(keyword) {
    const body = keyword;
    const url = `/search/all-search`;
    const data = postService(url, body);
    return data;
  }
}

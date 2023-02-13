import { postService, getService } from "../commonServices";
export class CollegeService {
  getColleges() {
    const url = `/college`;
    const data = getService(url);
    return data;
  }

  getCollegesByStream(stream) {
    const url = `/college/byStream?stream=${stream}`;
    const data = getService(url);
    return data;
  }

  getCollegesByCity(city) {
    const body = city;
    const url = `/college/filter`;
    const data = postService(url, body);
    return data;
  }

  getCollege(college_slug) {
    const url = `/college/getOneCollege/${college_slug}`; //temporarly slug is id
    console.log("slug", college_slug);
    const data = getService(url);
    return data;
  }

  getCollegeByLimit() {
    const url = `/college`;
    const data = getService(url);
    return data;
  }

  getCollegeByFilter(filter) {
    const body = filter;
    const url = "/college/filter";
    const data = postService(url, body);
    return data;
  }

  getFilterList(listBy) {
    const body = listBy;
    const url = "/college/list";
    const data = postService(url, body);
    return data;
  }
  getCollegeBySearch(query) {
    const url = `/college/results?query=${query}`;
    const data = getService(url);
    return data;
  }
}

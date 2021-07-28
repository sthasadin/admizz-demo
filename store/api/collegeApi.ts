import { postService, getService } from "../commonServices";
export class CollegeService {
  getColleges() {
    let url = `/college`;
    let data = getService(url);;
    return data;
  }

  getCollegesByStream(stream) {
    let url = `/college/byStream?stream=${stream}`;
    let data = getService(url);;
    return data;
  }

  getCollegesByCity(city) {
    let body = city;
    let url = `/college/filter`;
    let data = postService(url,body);
    return data;
  }

  getCollege(college_slug) {
    let url = `/college/getOneCollege/${college_slug}`;//temporarly slug is id
    let data = getService(url);
    return data;
  }
}

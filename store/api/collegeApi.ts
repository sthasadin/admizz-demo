import { postService, getService } from "../commonServices";
export class CollegeService {
  getColleges() {
    let url = "/college";
    let data = getService(url);;
    return data;
  }

  getCollege(college_slug) {
    let url = `/college/getOneCollege/?id=${college_slug}`;//temporarly slug is id
    let data = getService(url);
    return data;
  }
}

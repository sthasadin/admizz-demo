import { postService, getService } from "../commonServices";

export class FooterService {
  getTopColleges() {
    const url = "/footer/getTopColleges";
    const data = getService(url);
    return data;
  }

  addTopColleges(top_college) {
    const body = JSON.stringify(top_college);

    const url = "/footer/addTopColleges";
    const data = postService(url, body);
    return data;
  }

  getTopCourses() {
    const url = "/footer/getTopCourses";
    const data = getService(url);
    return data;
  }

  addTopCourses(top_courses) {
    const body = JSON.stringify(top_courses);
    const url = "/footer/addTopCourses";
    const data = postService(url, body);
    return data;
  }
}

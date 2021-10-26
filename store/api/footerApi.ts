import { postService, getService } from "../commonServices";

export class FooterService {
    getTopColleges() {
        let url = "/footer/getTopColleges";
        let data = getService(url);
        return data;
    }

    addTopColleges(top_college) {
        let body = JSON.stringify(top_college);

        let url = "/footer/addTopColleges";
        let data = postService(url, body);
        return data;
    }

    getTopCourses() {
        let url = "/footer/getTopCourses";
        let data = getService(url);
        return data;
    }

    addTopCourses(top_courses) {
        let body = JSON.stringify(top_courses);
        let url = "/footer/addTopCourses";
        let data = postService(url, body);
        return data;
    }
}

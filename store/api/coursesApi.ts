import { postService, getService } from "../commonServices";

export class CoursesService {

  // getFilters() {
  //   let url = "/courses/get-filters";
  //   let data = getService(url);
  //   return data;
  // }
  getPrograms() {
    let url = "/courses";
    let data = getService(url);;
    return data;
  }
  getAllLevels() {
    let url = `/courses/get-all-levels`;
    let data = getService(url);
    return data;
  }
  getAllStreams(course_level) {
    let url = `/courses/get-all-streams?courselevel=${course_level}`;
    let data = getService(url);
    return data;
  }
  getProgram(program_id) {
    let url = `/courses/get-program/${program_id}`;
    let data = getService(url);
    return data;
  }
  getAllPrograms(course_level, course_stream) {
    let url = `/courses/get-all-programs?coursestream=${course_stream}&courselevel=${course_level}`;
    let data = getService(url);
    return data;
  }
  addProgram(program) {
    let body = JSON.stringify(program)
    let url = `/courses/add-program`;
    let data = postService(url, body);
    return data;
  }
  deleteProgram(program_id) {
    let body = JSON.stringify(program_id)
    let url = `/courses/delete-program`;
    let data = postService(url, body, "DELETE");
    return data;
  }
  editProgram(program) {
    let body = JSON.stringify(program)
    let url = `/courses/update-program`;
    let data = postService(url, body, "PUT");
    return data;
  }
  getCollegeCourses(college_id) {
    let url = `/courses/get-courses-college/${college_id}`;
    let data = getService(url);
    return data;
  }
  addCollegeCourse(course) {
    let body = JSON.stringify(course)
    let url = `/courses/add-college-course`;
    let data = postService(url, body);
    return data;
  }
  editCollegeCourse(course) {
    let body = JSON.stringify(course)
    let url = `/courses/update-college-course`;
    let data = postService(url, body, "PUT");
    return data;
  }
  deleteCollegeCourse(course_id) {
    let body = JSON.stringify(course_id)
    let url = `/courses/delete-college-course`;
    let data = postService(url, body, "DELETE");
    return data;
  }
  getCollegesByCourses(course_level, course_stream, program_id) {
    let url = `/courses/get-all-colleges?coursestream=${course_stream}&courselevel=${course_level}&courseprogram=${program_id}`;
    let data = getService(url);
    return data;
  }
}

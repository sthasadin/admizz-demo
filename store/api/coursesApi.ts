import { postService, getService } from "../commonServices";

export class CoursesService {
  // getFilters() {
  //   let url = "/courses/get-filters";
  //   let data = getService(url);
  //   return data;
  // }
  getPrograms() {
    const url = "/courses";
    const data = getService(url);
    return data;
  }
  getAllLevels() {
    const url = `/courses/get-all-levels`;
    const data = getService(url);
    return data;
  }
  getAllStreams(course_level) {
    const url = `/courses/get-all-streams?courselevel=${course_level}`;
    const data = getService(url);
    return data;
  }
  getProgram(program_id) {
    const url = `/courses/get-program/${program_id}`;
    const data = getService(url);
    return data;
  }
  getAllPrograms(course_level, course_stream) {
    const url = `/courses/get-all-programs?coursestream=${course_stream}&courselevel=${course_level}`;
    const data = getService(url);
    return data;
  }
  addProgram(program) {
    const body = JSON.stringify(program);
    const url = `/courses/add-program`;
    const data = postService(url, body);
    return data;
  }
  deleteProgram(program_id) {
    const body = JSON.stringify(program_id);
    const url = `/courses/delete-program`;
    const data = postService(url, body, "DELETE");
    return data;
  }
  editProgram(program) {
    const body = JSON.stringify(program);
    const url = `/courses/update-program`;
    const data = postService(url, body, "PUT");
    return data;
  }
  getCollegeCourses(college_id) {
    const url = `/courses/get-courses-college/${college_id}`;
    const data = getService(url);
    return data;
  }
  addCollegeCourse(course) {
    const body = JSON.stringify(course);
    const url = `/courses/add-college-course`;
    const data = postService(url, body);
    return data;
  }
  editCollegeCourse(course) {
    const body = JSON.stringify(course);
    const url = `/courses/update-college-course`;
    const data = postService(url, body, "PUT");
    return data;
  }
  deleteCollegeCourse(course_id) {
    const body = JSON.stringify(course_id);
    const url = `/courses/delete-college-course`;
    const data = postService(url, body, "DELETE");
    return data;
  }
  getCollegesByCourses(course_level, course_stream, program_id) {
    const url = `/courses/get-all-colleges?coursestream=${course_stream}&courselevel=${course_level}&courseprogram=${program_id}`;
    const data = getService(url);
    return data;
  }
}

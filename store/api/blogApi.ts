import { postService, getService } from "../commonServices";
export class BlogService {
  getBlogs() {
    let url = "/blogs";
    let data = getService(url);;
    return data;
  }

  getBlog(blog_slug) {
    let url = `/blogs/${blog_slug}`;
    let data = getService(url);
    return data;
  }
  getNewsOfCollege(college_slug) {
    let url = `/blogs/getNewsCollege/${college_slug}`
    let data = getService(url)
    return data
  }
}

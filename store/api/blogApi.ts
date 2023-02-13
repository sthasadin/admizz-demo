import { postService, getService } from "../commonServices";
export class BlogService {
  getBlogs(blog_category) {
    const url = `/blogs/${blog_category}`;
    const data = getService(url);
    return data;
  }

  getBlog(blog_slug) {
    const url = `/blogs/slug/${blog_slug}`;
    const data = getService(url);
    return data;
  }
  getNewsOfCollege(college_slug) {
    const url = `/blogs/getNewsCollege/${college_slug}`;
    const data = getService(url);
    return data;
  }

  getBlogByCategory(blog_category) {
    const url = `/blog/${blog_category}`;
    const data = getService(url);
    return data;
  }

  getBlogComment(comment, id, blogId) {
    const body = JSON.stringify(comment);
    const url = "/comment";
    const data = postService(url, body);
    return data;
  }
}

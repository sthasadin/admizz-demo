import { postService, getService } from "../commonServices";
export class BlogService {
  getBlogs(blog_category) {
    let url = `/blogs/${blog_category}`;
    let data = getService(url);
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

  getBlogByCategory(blog_category){
    let url = `/blog/${blog_category}`;
    let data = getService(url);
    return data;
  }

  getBlogComment(comment,id,blogId){
    let body = JSON.stringify(comment)
    let url = '/comment';
    let data = postService(url,body);
    return data;
    
  }
}



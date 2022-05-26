import React, {useState} from "react";
import { SingleBlogCard } from "../../../components/SingleBlogCard";
import { useDispatch, useSelector } from "react-redux";
import { BlogLayout } from "../../../layouts/BlogLayout";
import { BlogCardLoader } from "../../../components/SkeletonLoading/BlogCardLoader";
import calculateReadingTime from "../../../utils/calculateReadingTime";
import { useRouter } from "next/router";
import { getBlogs } from "../../../store/Action/blog.action";

const BlogCategory = () => {
  const blogArray = useSelector((state: any) => state.blog.blogs);
  const multiLoading = useSelector((state: any) => state.blog.multiLoading);
  const [msg,setMsg] = useState("No Blogs in this category")
  const router = useRouter();
  const { category } = router.query;
  const dispatch = useDispatch()
  React.useEffect(()=>{
    if(category){
     dispatch(getBlogs(category));
    }
    if(blogArray){
      setMsg("")
    }
  },[])

  React.useEffect(()=>{
    if(category){
     dispatch(getBlogs(category));
    }
    if(blogArray){
      setMsg("")
    }
  },[category])

  const removeHtmlChar = (text) => {
    return text?.replace(/<[^>]+>/g, "");
  };

  return (
    // <div>asd</div>
    <BlogLayout title="Blogs">
      <div className="section-wrapper">
        {multiLoading && <BlogCardLoader count={10} />}
        <div className="blog-list-random-blog" style={{ margin: "30px 0" }}>
          <div className="blog-list-random-blog__highlightPost">
            <div className="blog-list-random-blog__secondaryPostContainer">
              {blogArray.length>0?
                blogArray?.map((blog, i) => {
                  return (
                    <div className="blog-list-member__secondaryPost" key={i}>
                      <SingleBlogCard
                        type={blog?.category}
                        auther={blog?.author}
                        time={`${calculateReadingTime(
                          blog?.blog_desc ? removeHtmlChar(blog?.blog_desc) : ""
                        )} min read`}
                        title={blog?.blog_title}
                        desc={removeHtmlChar(blog?.blog_desc)}
                        backgroundImg={blog?.blog_imageURL}
                      />
                    </div>
                  );
                })
              :<div>No blogs in this category </div> }
               
            </div>
          </div>
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogCategory;

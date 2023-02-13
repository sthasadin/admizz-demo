import React, { FC, useEffect } from "react";
import ImageAuther from "../../public/auther01.png";
import { getBlogDetail } from "../../store/Action/blogDetails.action";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import renderHTML from "react-render-html";

interface BlogDetailContent {
  blog_desc: string;
  author: string;
}

const BlogDetailContent: FC<BlogDetailContent> = ({ blog_desc, author }) => {
  const router = useRouter();
  const { slug } = router.query;
  const blogs = useSelector((state: any) => state.singleBlog.blog);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogDetail(slug));
  }, [slug]);
  return (
    <div className="blog-detail-content">
      {blogs?.blog_desc && (
        <div className="blog-detail-content__contentText">
          {renderHTML(blogs?.blog_desc)}
        </div>
      )}
    </div>
  );
};

export { BlogDetailContent };

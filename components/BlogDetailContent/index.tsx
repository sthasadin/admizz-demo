import React, { FC,useEffect } from "react";
import ImageAuther from "../../public/auther01.png";
import {getBlogDetail} from '../../store/Action/blogDetails.action';
import { useSelector, useDispatch } from "react-redux";
interface BlogDetailContent {
  blog_desc: string;
  author: string;
}

const BlogDetailContent: FC<BlogDetailContent> = ({ blog_desc, author }) => {
  
  const blogs = useSelector((state) => state.blog.blogs);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getBlogDetail("All"));
  }, []);

 

  return (
    <div className="blog-detail-content">
      {blog_desc && (
        <div className="blog-detail-content__contentText">{blog_desc}</div>
      )}
      <div className="blog-detail-content__contentTitle">
        <b>Country-wise time for final IND-SAT 2020 Examinations is as Under</b>
      </div>
      {blog_desc && ( 
      <div className="blog-detail-content__contentText">
        The Ind-SAT 2020 exam will be conducted across the following countries –
        Bangladesh, Bhutan, Ethiopia, India, Indonesia, Kenya, Mauritius, Nepal,
        Rwanda, Sri Lanka, Tanzania, Uganda and Zambia. The Ind-SAT 2020 Main
        Exam is scheduled to take place on 22nd July 2020. Dates for the Ind-SAT
        2020 (including Mock Test and Main Exam) will also be provided to
        students via email and shall also be uploaded on the website and
        Facebook.
      </div>
      )}
     
    </div>
  );
};

export { BlogDetailContent };

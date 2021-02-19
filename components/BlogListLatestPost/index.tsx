import React from "react";
import moment from 'moment'
import { SingleBlogCard } from "../SingleBlogCard";
import { SingleListPost } from "../SingleListPost";
import { SingleListPostWithImage } from "../SingleListPostWithImage";
import { useSelector } from 'react-redux'
import calculateReadingTime from "../../utils/calculateReadingTime";
// import { truncate } from "fs";

const BlogListLatestPost = () => {
  // const blogs = useSelector(state => state.allBlog.allBlog)
  let blogs = useSelector(state => state.blog.blogs.sort((a,b) => moment(a.createdAt).diff(moment(b.createdAt))))//latest
  const len = blogs.length > 7 ? 7 : blogs.length
  const text_truncate =(str) => {
    return str.substring(0, 70 - 3) + '...';
  }
  return (
    <div className="blog-list-latest-post">
      <div className="blog-list-latest-post__highlightPost">
        <div className="blog-list-latest-post__secondaryPostContainer">
          {
            blogs.length > 1 ?(
              <div className="blog-list-latest-post__secondaryPost">
                <SingleBlogCard
                  type="Colleges"
                  auther= {blogs[1].author}
                  time={`${calculateReadingTime(blogs[1].blog_desc)} min read`}
                  title={blogs[1].blog_title}
                  desc={text_truncate(blogs[1].blog_desc)}
                  image = {blogs[1].blog_imageURL}
                  id = {blogs[1]._id}
                  slug = {blogs[1].blog_slug}
                />
              </div>
            ) : ''
          }
          {
            blogs.length > 2 ?(
              <div className="blog-list-latest-post__secondaryPost">
                <SingleBlogCard
                  type="Colleges"
                  auther= {blogs[2].author}
                  time={`${calculateReadingTime(blogs[2].blog_desc)} min read`}
                  title={blogs[2].blog_title}
                  desc={text_truncate(blogs[2].blog_desc)}
                  image = {blogs[2].blog_imageURL}
                  id = {blogs[2]._id}
                  slug= {blogs[2].blog_slug}
                />
              </div>
            ) : ''
          }
        </div>
        <div className="blog-list-latest-post__smallSecondaryPostContainer">
          {
            blogs.length > 3 ?(
              blogs.slice(3, len).map(({_id, blog_title, blog_desc, blog_imageURL, author, category,blog_slug}) => (
                <div className="blog-list-latest-post__secondaryPost" key={_id}>
                  <SingleListPostWithImage
                    type={category}
                    auther={author}
                    time={`${calculateReadingTime(blog_desc)} min read`}
                    title={blog_title}
                    desc={text_truncate(blog_desc)}
                    id = { _id }
                    slug= {blog_slug}
                  />
              </div>
              ))
            ):''
          }
          
          
          {/* <div className="blog-list-latest-post__secondaryPost">
            <SingleListPostWithImage
              type="Colleges"
              auther="Quicy Sean"
              time="5 min read"
              title="How I got my job in Google with the help of Admizz"
              desc="Get the right career advice for you and earn your best career certificates."
            />
          </div>
        </div>
        <div className="blog-list-latest-post__secondaryPostContainer">
          <div className="blog-list-latest-post__secondaryPost">
            <SingleListPostWithImage
              type="Business"
              auther="David Hoffman"
              time="5 min read"
              title="How I got my job in Google with the help of Admizz"
              desc="Get the right career advice for you and earn your best career certificates."
            />
          </div>
          <div className="blog-list-latest-post__secondaryPost">
            <SingleListPostWithImage
              type="Colleges"
              auther="Quicy Sean"
              time="5 min read"
              title="How I got my job in Google with the help of Admizz"
              desc="Get the right career advice for you and earn your best career certificates."
            />
          </div> */}
        </div>
      </div>
      <div className="blog-list-latest-post__postList">
        {
          blogs.length > 10?(
            blogs.slice(7, 10).map(({_id, blog_title, blog_desc, blog_imageURL, author, category, blog_slug}) => (
              <div key={_id}>
                <SingleListPost
                  author={author}
                  time={`${calculateReadingTime(blog_desc)} min read`}
                  title={blog_title}
                  desc={text_truncate(blog_desc)}
                  id = {_id}
                  slug = {blog_slug}
                />
              </div>
            ))
          ) : ''
        }
        {/* <SingleListPost
          author="Jimmy Stews"
          time="5 min read"
          title="IIT Bombay Campus to be Opened to a Few UG, apply fast to get your admission early"
          desc="Get the right career advice for you and earn your best..."
        />
        <SingleListPost
          author="Robert Brown"
          time="5 min read"
          title="IIT Bombay Campus to be Opened to a Few UG, apply fast to get your admission early"
          desc="Get the right career advice for you and earn your best..."
        /> */}
      </div>
    </div>
  );
};

export { BlogListLatestPost };

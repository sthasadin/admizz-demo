import React from "react";
import { useSelector } from 'react-redux'  
import Link  from 'next/link'
const BlogListBanner = () => {
  const blogs = useSelector(state => state.allBlog.allBlog)

  return (
    <div className="blog-list-banner" style={{position : "relative"}}>
      {/* {blogs.length > 0?  <img 
        src={blogs[0].blog_imageURL} 
        alt={blogs.length > 0? blogs[0].blog_desc : ''}
        style={{position : 'absolute', left : 0, top : 0, width : "100%", height : "100%", zIndex : 1, objectFit : 'cover'}}
      /> : ''} */}
      <div className="blogCard" style={{zIndex : 100, backgroundColor : "green",}}>
        <div className="blogCard__inner" >
          <div className="blogCard__category" style={{ zIndex : 100 }}>{blogs.length > 0? blogs[0].category[0] :''}</div>
          <div className="blogCard__details">
            <div className="blogCard__meta" style={{ zIndex : 100, color : "black" }}>
              <div className="blogCard__author"> { blogs.length > 0? blogs[0].author : '' } </div>
              <div className="blogCard__time">5 min read</div>
            </div>
            
            <div className="blogCard__title" style={{cursor : 'pointer'}}>
              {
                blogs.length > 0? (
                  <Link href = {`/blogs/${blogs[0]._id}`}>
                    {blogs[0].blog_title}
                  </Link>
                ) : ''
              }
            </div>

            <div className="blogCard__desc">
              {
                blogs.length > 0? blogs[0].blog_desc : ''
              }
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BlogListBanner };

import React from "react";
import { useSelector } from 'react-redux'  
import Link  from 'next/link'
import { useRouter } from 'next/router'
import calculateReadingTime from "../../utils/calculateReadingTime";
const BlogListBanner = () => {
  const router = useRouter();
  // const blogs = useSelector(state => state.allBlog.allBlog)
  const blogs = useSelector(state => state.blog.blogs)
  const text_truncate =(str) => {
    return str.substring(0, 70 - 3) + '...';
  }

  return (
    <div className="blog-list-banner" style={{position : "relative"}} onClick={() => router.push(`/blogs/${blogs[0].blog_slug}`)}>
      {/* {blogs.length > 0?  <img 
        src={blogs[0].blog_imageURL} 
        alt={blogs.length > 0? blogs[0].blog_desc : ''}
        style={{position : 'absolute', left : 0, top : 0, width : "100%", height : "100%", zIndex : 1, objectFit : 'cover'}}
      /> : ''} */}
      <div className="blogCard" style={{zIndex : 100,}}>
        <div className="blogCard__inner" >
          <div className="blogCard__category" style={{ zIndex : 100 }}>{blogs.length > 0? blogs[0].category :''}</div>
          <div className="blogCard__details">
            <div className="blogCard__meta" style={{ zIndex : 100, color : "black" }}>
              <div className="blogCard__author"> { blogs.length > 0? blogs[0].author : '' } </div>
              <div className="blogCard__time">{`${calculateReadingTime(blogs.length?blogs[0].blog_desc:'')} min read`}</div>
            </div>
            
            <div className="blogCard__title" style={{cursor : 'pointer'}}>
              {/* {
                blogs.length > 0? (
                  <Link href = {`/blogs/${blogs[0]._id}`}> */}
                    {blogs.lenght?blogs[0].blog_title:''}
                  {/* </Link>
                ) : ''
              } */}
            </div>

            <div className="blogCard__desc">
              {
                blogs.length > 0? text_truncate(blogs[0].blog_desc) : ''
              }
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BlogListBanner };

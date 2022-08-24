import React, { useEffect, useRef, useState } from "react";
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
} from "react-share";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { BlogLayout } from "../../layouts/BlogLayout";
import { BlogDetailHeader } from "../../components/BlogDetailHeader";
import { BlogDetailContent } from "../../components/BlogDetailContent";
import { Button } from "../../components";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { getBlogDetail } from "../../store/Action/blogDetails.action";
import BlogComment from "../../components/BlogComment";
import CommentSection from "../../components/BlogComment/comment";
import { getBlogs } from "../../store/Action/blog.action";
import { BlogListSimilarBlog } from "../../components/BlogListSimilarBlog";
import { getComments } from "@/store/Action/Comment.action";
import { AiOutlineShareAlt } from "react-icons/ai";
import { log } from "util";
const blogDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClose = () => {
    // setOpen(false);
    setShowShareOptions(false);
  };
  const modalRef = useRef(null);
  function useOutside(ref, modal, handleClose) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (modal) {
          if (ref.current && !ref.current.contains(event.target)) {
            handleClose();
          }
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, modal]);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  useOutside(modalRef, showShareOptions, handleClose);

  const blogs = useSelector((state: any) => state.blog.blogs);

  useEffect(() => {
    dispatch(getBlogs("All"));
  }, []);

  const { blog } = useSelector((state: any) => state.blogDetails);
  const { comments } = useSelector((state: any) => state.blog);
  const shareUrl = `https://admizz.com/blogs/${slug}`;
  const [newComment, setNewComment] = useState(0);
  useEffect(() => {
    dispatch(getBlogDetail(slug));
    // dispatch(getBlog(slug));(
  }, [slug]);
  useEffect(() => {
    dispatch(getComments(blog._id));
  }, [blog, newComment]);

  useEffect(() => {
    if (showShareOptions) {
      const share_class = document.getElementsByClassName(
        'react-share__ShareButton'
      );
      Array.from(share_class).forEach(item => {
        item?.classList?.remove('react-share__ShareButton');
      });
    }
  }, [showShareOptions]);
  return (
    <BlogLayout title={blog?.blog_title}>
      <div className="container section-wrapper">
        <main className="blog-detail">
          <div className="blog-detail__container">
            <div className="blog-detail__main">
              <BlogDetailHeader {...blog} />
            </div>
            <div className="blog-detail__imageContainer">
              <img className="blog-detail__image" src={blog?.blog_imageURL} />
            </div>
            <div className="blog-detail__postDetail">
              <div className="blog-detail__postValueContainer">
                <div className="blog-detail__postValue">
                  <b>{`Posted by: ${blog?.author}`}</b>
                </div>
              </div>
              <div className="blog-detail__shareInfoContainer">
                <div className="blog-detail__buttonContainer">
                  <Button className="blog-detail__button">
                    {blog?.category}
                  </Button>
                </div>
            
                <div
                  className="blog-detail__sharetitle"
                  style={{position:"relative", paddingBottom:showShareOptions?40:0}}
                  onClick={() => setShowShareOptions(!showShareOptions)}
                >
                  <p className="blog-detail__sharetext">Share This Article</p>
                
                
                <div
                  style={{
                    position: "absolute",
                    top: 50,
                    display: showShareOptions ? "block" : "none",
                    // paddingBottom:showShareOptions?50:0
                  }}
                  ref={modalRef}
                >
                <ul
                  style={{
                    position: "relative",
                    zIndex: 999,
                    padding: 10,
                    borderRadius: 4,
                    backgroundColor: "#fff",
                    margin: 0,
                    display: "flex",
                    // marginBottom:40
                
                  }}
                >
                  <div style={{ marginRight: 5 }}>
                    <FacebookShareButton url={shareUrl} quote="#Admizz">
                      <FacebookIcon size={40} />
                    </FacebookShareButton>
                  </div>

                  <div style={{ marginRight: 5 }}>
                    <WhatsappShareButton url={shareUrl}>
                      <WhatsappIcon size={40} />
                    </WhatsappShareButton>
                  </div>
                </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="blog-detail__main">
              <BlogDetailContent {...blog} />
              {/* {author && ( */}
              <div className="blog-detail-content__autherContainer">
                <img
                  className="blog-detail-content__autherImage"
                  src={blog?.ImageAuther}
                />
                <div className="blog-detail-content__autherTextContainer">
                  <p className="blog-detail-content__autherName">
                    {blog?.author}
                  </p>
                  <p className="blog-detail-content__autherTitle">
                    {blog?.author}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container ">
            <BlogComment
              newComment={newComment}
              setNewComment={setNewComment}
              data={blog}
            />
            <CommentSection comments={comments} />

            <div
              className="blog-detail__imageContainer"
              style={{ height: "100%" }}
            >
              <div className="blog-detail-member__memberTitle">
                <div className="blog-detail-member__memberTitleText">
                  SIMILAR BLOGS
                </div>
              </div>
              <BlogListSimilarBlog blogArray={blogs} />
            </div>
          </div>
        </main>
      </div>
    </BlogLayout>
  );
};

export default blogDetail;

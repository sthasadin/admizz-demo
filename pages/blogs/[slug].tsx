import React, { useEffect } from "react";
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
const blogDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const blogs = useSelector((state: any) => state.blog.blogs);

  useEffect(() => {
    dispatch(getBlogs("All"));
  }, []);

  const { blog } = useSelector((state: any) => state.blogDetails);
  const shareUrl = `https://admizz.asterdio.xyz/blogs/${slug}`;
  {
  }
  useEffect(() => {
    dispatch(getBlogDetail(slug));
    // dispatch(getBlog(slug));(
  }, [slug]);

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
                  onClick={handleClickOpen}
                >
                  <p className="blog-detail__sharetext">Share This Article</p>
                </div>

                <Dialog
                  onClose={handleClose}
                  aria-labelledby="simple-dialog-title"
                  open={open}
                >
                  <DialogTitle id="simple-dialog-title">
                    Share This Article
                  </DialogTitle>
                  <List className="blog-detail__listContainer">
                   
                    <ListItem button className="blog-detail__listItemContainer"
             >
                   
                     
                      <ListItemAvatar>
                        <FacebookShareButton
                          url={shareUrl}
                          quote={"Admizz - You just dream it."}
                          hashtag="#admizz"
                    
                        >
                          <Avatar>
                            <FacebookIcon size={40} round={true} name="Facebook" />
                        
                       
                          </Avatar>
                        </FacebookShareButton>                   

                      </ListItemAvatar>
                     
                    
                      <ListItemText
                     
                      primary="Facebook"/>
                    </ListItem>
                    
                    <ListItem button>
                      <ListItemAvatar>
                        <WhatsappShareButton
                          url={shareUrl}
                          title={`${blog.title}`}
                        >
                          <Avatar>
                            {/* <WhatsAppIcon /> */}
                            <WhatsappIcon size={40} round={true} />
                          </Avatar>
                        </WhatsappShareButton>
                      </ListItemAvatar>
                      <ListItemText primary={"Whatsapp"} />
                    </ListItem>
                  </List>
                </Dialog>
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
            <BlogComment data={blog} />
            <CommentSection />

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

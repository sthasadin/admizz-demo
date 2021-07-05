import React, { useEffect } from "react";
import { Input } from "../../components/Input";
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
} from "react-share";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../layouts";
import { BlogDetailHeader } from "../../components/BlogDetailHeader";
import { BlogDetailContent } from "../../components/BlogDetailContent";
import { BlogDetailMember } from "../../components/BlogDetailMember";
import { Button } from "../../components";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import WhatsAppIcon from "@material-ui/icons/WhatsApp";
// import { getBlogDetail } from "../../store/Action/blogDetails.action";
import { getBlog } from "../../store/Action/blog.action";

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

  useEffect(() => {
    // dispatch(getBlogDetail(slug));
    dispatch(getBlog(slug));
  }, [slug]);

  // const { blog } = useSelector((state) => state.blogDetails);
  const blog = useSelector((state) => state.blog.blog);

  return (
    <Layout title={blog?.blog_title}>
      <div className="blog-subnavbar ">
        <ul className="blog-subnavbarcontainer section-wrapper">
          <li>All</li>
          <li>Business</li>
          <li>Engineering</li>
          <li>Something</li>
          <li>Software Dev</li>
          <li>Science</li>
          <li>Medical</li>
          <li>Others</li>
        </ul>
      </div>
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
                <div className="blog-detail__postValue">
                  <b>50</b> Views
                </div>
                <div className="blog-detail__postValue">
                  <b>60</b> Comments
                </div>
              </div>
              <div className="blog-detail__shareInfoContainer">
                <div className="blog-detail__buttonContainer">
                  <Button className="blog-detail__button">TECHNOLOGY</Button>
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
                    <ListItem button className="blog-detail__listItemContainer">
                      <ListItemAvatar>
                        <FacebookShareButton
                          url={`${process.env.BASE_URL}/blogs/${blog.blog_slug}`} //temporary
                          quote={"Admizz - You just dream it."}
                          hashtag="#admizz"
                        >
                          <Avatar>
                            <FacebookIcon size={40} round={true} />
                            {/* <FacebookIcon /> */}
                          </Avatar>
                        </FacebookShareButton>
                      </ListItemAvatar>
                      <ListItemText primary={"Facebook"} />
                    </ListItem>

                    <ListItem button>
                      <ListItemAvatar>
                        <WhatsappShareButton
                          url={`${process.env.BASE_URL}/blogs/${blog.blog_slug}`}
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
            <div className="blog-detail__main">
              <BlogDetailContent {...blog} />
            </div>
          </div>
          <div className="container">
            <div className="blog-detail__bannerImage">
              <img className="blog-detail__image" src="/ads-banner.png" />
            </div>
            <div className="blog-detail__main" style={{ marginTop: "30px" }}>
              <BlogDetailContent {...blog} />
            </div>

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
                    Software Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container ">
            <div
              className="blog-detail__imageContainer"
              style={{ height: "100%" }}
            >
              <BlogDetailMember />
            </div>
            <div className="blog-detail-content__commentContainer">
              <p className="blog-detail-content__commentTitle">
                Leave A Comment
              </p>
              <Input
                name={"query"}
                // onChange={handleChange}
                // value={formValue.query}
                multiline
                placeholder={"Add additional query you have"}
                // errorMessage={formError.query}
                // error={!!formError.query}
                margin={"0px 0px 16px 0px"}
                fullWidth
              />
              <Button>SUBMIT</Button>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default blogDetail;

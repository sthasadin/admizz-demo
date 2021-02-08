import React, { FC, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { Footer } from "../../layouts/footer";
import { Navbar } from "../../layouts/navbar";
import { Topbar } from "../../layouts/topbar";
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
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { getBlogDetail } from "../../store/Action/blogDetails.action";

const blogDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useDispatch();
  console.log(slug);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getBlogDetail(slug));
  }, []);

  const { blog } = useSelector((state) => state.blogDetails);
  useEffect(() => {
    console.log(blog)
  }, [blog]);

  return (
    <div className="container">
      <Head>
        <Topbar />
        <title>Admizz - Home</title>
        <link rel="icon" href="favicon.svg" />
      </Head>
      <div>
        <Navbar />
        <main className="blog-detail">
          <div className="blog-detail__container">
            <div className="blog-detail__main">
              <BlogDetailHeader {...blog} />
            </div>
            <div className="blog-detail__imageContainer">
              <img className="blog-detail__image" src={blog ?.blog_imageURL} />
              <div className="blog-detail__postDetail">
                <div className="blog-detail__postValueContainer">
                  {blog ?.author && (
                    <div className="blog-detail__postValue">
                      <b>Posted by: Ashim</b>
                    </div>
                  )}
                  {blog.views && (
                    <div className="blog-detail__postValue">
                      <b>50</b> Views
                  </div>
                  )}
                  {blog.comments && (
                    <div className="blog-detail__postValue">
                      <b>60</b> Comments
                  </div>
                  )}
                </div>
                <div className="blog-detail__shareInfoContainer">
                  <div className="blog-detail__buttonContainer">
                    <Button className="blog-detail__button">TECHNOLOGY</Button>
                  </div>
                  <div className="blog-detail__shareInfoContainer">
                    <div className="blog-detail__buttonContainer">
                      <Button className="blog-detail__button">TECHNOLOGY</Button>
                    </div>
                    <div className="blog-detail__sharetitle" onClick={handleClickOpen}>
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
                        <ListItem
                          button
                          className="blog-detail__listItemContainer"
                          onClick={() => console.log("Share Clicked")}
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <FacebookIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary={"Facebook"} />
                        </ListItem>

                        <ListItem
                          button
                          onClick={() => console.log("Share Clicked")}
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <WhatsAppIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText primary={"Whatsapp"} />
                        </ListItem>
                      </List>
                    </Dialog>
                  </div>
                </div>
                <div className="blog-detail__main">
                  <BlogDetailContent />
                </div>
                <div className="blog-detail__imageContainer">
                  <BlogDetailMember />
                </div>
              </div>
            </div>
            <div className="blog-detail__main">
              <BlogDetailContent {...blog} />
            </div>
            <div className="blog-detail__imageContainer">
              <BlogDetailMember />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default blogDetail;

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Topbar } from "./topbar";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import { getBlogs } from "../store/Action/blog.action";
import BlogCategory from "pages/blogs/category/[category]";

const BlogLayout = ({ children, title }) => {
  const [blogCategory, setBlogCategory] = React.useState("");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const router = useRouter();

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBlogs(blogCategory));
  }, [blogCategory]);

  return (
    <>
      <Topbar />
      <Head>
        <title>Admizz - {title}</title>
        <link rel="icon" href="favicon.svg" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div className="blog-subnavbar ">
        <div className="section-wrapper">
          <div
            className="blog-subnavbar__humburger-icon"
            onClick={() => setMobileMenu(true)}
          >
            <MenuIcon />
          </div>
          <ul className="blog-subnavbarcontainer ">
            <li
              onClick={() => setBlogCategory("All")}
              className={`blog-subnavbar ${
                blogCategory == "All" ? "active-blognav" : ""
              }`}
            >
              <Link href={`/blogs/category/all`}> All</Link>
            </li>

            <li
              onClick={() => setBlogCategory("Business")}
              className={`blog-subnavbar ${
                blogCategory == "Business" ? "active-blognav" : ""
              }`}
            >
              <Link href={`/blogs/category/business`}>Business</Link>
            </li>

            <li
              onClick={() => setBlogCategory("Engineering")}
              className={`blog-subnavbar ${
                blogCategory == "Engineering" ? "active-blognav" : ""
              }`}
            >
              <Link href={`/blogs/category/engineering`}>Engineering</Link>
            </li>
            <li
              onClick={() => setBlogCategory("Something")}
              className={`blog-subnavbar ${
                blogCategory == "Something" ? "active-blognav" : ""
              }`}
            >
              <Link href={`/blogs/category/something`}>Something</Link>
            </li>
            <li
              onClick={() => setBlogCategory("Software-Developer")}
              className={`blog-subnavbar ${
                blogCategory == "Software-Developer" ? "active-blognav" : ""
              }`}
            >
              <Link href={`/blogs/category/software-developer`}>
                Software Dev
              </Link>
            </li>
            <li
              onClick={() => setBlogCategory("Science")}
              className={`blog-subnavbar ${
                blogCategory == "Science" ? "active-blognav" : ""
              }`}
            >
              <Link href={`/blogs/category/science`}>Science</Link>
            </li>
            <li
              onClick={() => setBlogCategory("Medical")}
              className={`blog-subnavbar ${
                blogCategory == "Medical" ? "active-blognav" : ""
              }`}
            >
              <Link href={`/blogs/category/medical`}>Medical</Link>
            </li>
            <li
              onClick={() => setBlogCategory("Others")}
              className={`blog-subnavbar ${
                blogCategory == "Others" ? "active-blognav" : ""
              }`}
            >
              <Link href={`/blogs/category/others`}>Others</Link>
            </li>
          </ul>
        </div>

        <div className={`mobile-sub-menu ${mobileMenu && "active-subnav-bar"}`}>
          <div
            onClick={() => setMobileMenu(false)}
            className="sub-menu-close-icon"
          >
            <CloseIcon style={{ float: "right" }} />
          </div>
          <ul className="mobile-subnav-bar-container">
            <li
              onClick={() => setBlogCategory("All")}
              className={`blog-msubnavbar ${
                blogCategory == "All" ? "active-blognav" : ""
              }`}
            >
              <Link href={`/blogs/category/all`}> All</Link>
            </li>

            <li
              onClick={() => setBlogCategory("Business")}
              className={`blog-msubnavbar ${
                blogCategory == "Business" ? "active-blognav" : ""
              }`}
            >
              <Link href={`/blogs/category/business`}>Business</Link>
            </li>

            <li
              onClick={() => setBlogCategory("Engineering")}
              className={`blog-msubnavbar ${
                blogCategory == "Engineering" ? "active-blognav" : ""
              }`}
            >
              <Link href={`/blogs/category/engineering`}>Engineering</Link>
            </li>
            <li
              onClick={() => setBlogCategory("Something")}
              className={`blog-msubnavbar ${
                blogCategory == "Something" ? "active-blognav" : ""
              }`}
            >
              <Link href={`/blogs/category/something`}>Something</Link>
            </li>
            <li
              onClick={() => setBlogCategory("Software-Developer")}
              className={`blog-msubnavbar ${
                blogCategory == "Software-Developer" ? "active-blognav" : ""
              }`}
            >
              <Link href={`/blogs/category/software-developer`}>
                Software Dev
              </Link>
            </li>
            <li
              onClick={() => setBlogCategory("Science")}
              className={`blog-msubnavbar ${
                blogCategory == "Science" ? "active-blognav" : ""
              }`}
            >
              <Link href={`/blogs/category/science`}>Science</Link>
            </li>
            <li
              onClick={() => setBlogCategory("Medical")}
              className={`blog-msubnavbar ${
                blogCategory == "Medical" ? "active-blognav" : ""
              }`}
            >
              <Link href={`/blogs/category/medical`}>Medical</Link>
            </li>
            <li
              onClick={() => setBlogCategory("Others")}
              className={`blog-msubnavbar ${
                blogCategory == "Others" ? "active-blognav" : ""
              }`}
            >
              <Link href={`/blogs/category/others`}>Others</Link>
            </li>
          </ul>
        </div>
      </div>
      {children}
      <Footer />
    </>
  );
};

export { BlogLayout };

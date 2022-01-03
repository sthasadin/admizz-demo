import React from "react";
import Head from "next/head";
import Link from "next/link";

import { useDispatch } from "react-redux";
import { Topbar } from "./topbar";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

import { getBlogs } from "../store/Action/blog.action";

const BlogLayout = ({ children, title }) => {
  const [blogCategory, setBlogCategory] = React.useState("");

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
          <ul className="blog-subnavbarcontainer ">
            <li
              onClick={() => setBlogCategory("All")}
              className={`blog-subnavbar ${
                blogCategory == "All" ? "active-blognav" : ""
              }`}
            >
              <Link href={`/blogs`}> All</Link>
            </li>

            <li
              onClick={() => setBlogCategory("Business")}
              className={`blog-subnavbar ${
                blogCategory == "Business" ? "active-blognav" : ""
              }`}
            >
              <Link href={`/blogs/business`}>Business</Link>
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
      </div>
      {children}
      <Footer />
    </>
  );
};

export { BlogLayout };

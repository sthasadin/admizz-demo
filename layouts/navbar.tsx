import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

import SearchField from "../components/SearchField";
import { searchAllItem } from "../store/Action/search.action";
import CircularProgress from "@material-ui/core/CircularProgress";

const Navbar = (props: any) => {
  const [navbarSticky, setNavbarSticky] = React.useState(false);
  const [searchField, setSearchField] = React.useState(false as boolean);
  const [keyword, setKeyword] = React.useState("");
  const [mobileSize, setMobilesize] = React.useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.search.data);
  const loader = useSelector((state) => state.search.loader);

  const [state, setState] = React.useState({
    top: false,
  });

  React.useEffect(() => {
    if (keyword) {
      dispatch(searchAllItem({ keyword: keyword }));
    }
  }, [keyword]);

  const toggleDrawer = (anchor, open) => (event) => {
    console.log({ anchor, open });
    if (
      event.type === "keyup" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    if (event.type === "scrollup") {
      setState({ ...state, top: open });
    }
    setState({ ...state, [anchor]: open });

    // setState({ ...state, top: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="navbar__drawer__container"
    >
      <div className="drawer__header">
        <img src="/whiteLogo.png" alt="admizz_logo" className="img__logo" />
        {/* <div className="select__boxcontainer">
          <div className="selectbox__text">Study In</div>
          <Select className="selectBox">
            <MenuItem value="usa">USA</MenuItem>
            <MenuItem value="nepal">NEPAL</MenuItem>
          </Select>
        </div> */}
        <img
          src="/crossIcon.png"
          alt="crossIcon_logo"
          className="cross_logo"
          onClick={toggleDrawer(anchor, false)}
        />
      </div>

      <List className="navbar__listcontainer">
        <ListItem button key={"Home"} className="navbar__list">
          <Link href="/">
            <ListItemText primary={"Home"} />
          </Link>
        </ListItem>
        <ListItem button key={"Colleges"} className="navbar__list">
          <Link href="/colleges">
            <ListItemText primary={"Colleges"} />
          </Link>
        </ListItem>
        <ListItem button key={"Blogs"} className="navbar__list">
          <Link href="/blogs">
            <ListItemText primary={"Blogs"} />
          </Link>
        </ListItem>
        <ListItem button key={"FAQs"} className="navbar__list">
          <Link href="/faq">
            <ListItemText primary={"FAQs"} />
          </Link>
        </ListItem>
        <ListItem button key={"Contact"} className="navbar__list">
          <Link href="/contact-us">
            <ListItemText primary={"Contact"} />
          </Link>
        </ListItem>
        <ListItem button key={"Contact"} className="navbar__list">
          <Link href="/login">
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <div>
                {" "}
                <img src="/user-icon.png" alt="..." />
              </div>
              <div className="MuiTypography-body1">Sign up/Login</div>
            </div>
          </Link>
        </ListItem>
      </List>

      <div className="navbar__applyaddresscontainer">
        <div className="navbar__applynowcontainer">
          <div className="navbar__applynowtext"> Ready to get started?</div>
          <Button className="navbar__applybtn">Apply Now</Button>
        </div>

        <div className="navbar__contactcontainer">
          <div className="navbar__contactdetails">
            <div className="navbar__contactIcons">
              <img src="/contactIcon.png" alt="contact_logo" />
              <div>Contact us</div>
            </div>
            <div className="navbar__contact1">
              <div className="navbar__countryname">Nepal:</div>
              <div className="navbar__contactnumber">+977 87654321</div>
            </div>
            <div className="navbar__contact2">
              <div className="navbar__countryname">India:</div>
              <div className="navbar__contactnumber">+977 87654321</div>
            </div>
          </div>

          <div className="navbar__contactdetails">
            <div className="navbar__contactIcons">
              <img src="/contactIcon.png" alt="contact_logo" />
              <div>Address</div>
            </div>
            <div className="navbar__contact1">
              <div className="navbar__countryname">Nepal:</div>
              <div className="navbar__contactnumber">+977 87654321</div>
            </div>
            <div className="navbar__contact2">
              <div className="navbar__countryname">India:</div>
              <div className="navbar__contactnumber">+977 87654321</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavbarSticky(true);
    } else {
      setNavbarSticky(false);
    }
  };

  const windowResize = () => {
    if (window.innerWidth < 600) {
      setMobilesize(true);
    } else {
      setMobilesize(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    windowResize();
    window.addEventListener("resize", windowResize);

    return () => window.removeEventListener("resize", windowResize);
  }, [mobileSize]);

  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  const cleanText = (text) => {
    return text?.replace(/<\/?[^>]+(>|$)/g, " ");
  };

  return (
    <div
      className={`navbar  ${
        navbarSticky && props.stickyBar && "sticky-nab-bar"
      } `}
    >
      <div className={`navbar__inner `}>
        <div className={` navbar__logo ${searchField ? "mobile-navbar" : ""}`}>
          {mobileSize ? (
            <div className="logo mobile-logo" onClick={() => router.push("/")}>
              <img src="/mobileVersionLogo.png" alt="Admizz_logo" />
            </div>
          ) : (
            <div className="logo " onClick={() => router.push("/")}>
              <img src="/logo.png" alt="Admizz_logo" />
            </div>
          )}
        </div>

        <div className="navbar__hamburger">
          <div
            className={`search-item ${
              searchField ? "mobile-search-bar-active" : "mobile-search-bar"
            }`}
          >
            <SearchField
              icon={"/search.png"}
              isSearch={searchField}
              setSearchField={setSearchField}
              setKeyword={setKeyword}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />

            <div
              className={`${
                keyword ? "mobile-search-result-container" : "d-none"
              }`}
            >
              {loader && (
                <div className="mobile-search-loader">
                  {" "}
                  <CircularProgress />
                </div>
              )}
              {data &&
                !loader &&
                data?.map((item, i) => {
                  return (
                    <div className="mobile-search-item-content" key={i}>
                      <div className="search-image-content">
                        <img
                          src={
                            item.college_logo
                              ? item.college_logo
                              : item.blog_imageURL
                          }
                          alt="..."
                        />
                      </div>
                      <div className="search-text-content">
                        <Link
                          href={`${
                            item.college_slug
                              ? `colleges/${item.college_slug}`
                              : `/blogs/${item.blog_slug}`
                          }`}
                        >
                          {item.name
                            ? truncateString(item.name, 35)
                            : truncateString(item.blog_title, 35)}
                        </Link>
                        <div className="search-text-description">
                          {item.description
                            ? truncateString(cleanText(item.description), 80)
                            : truncateString(cleanText(item.blog_desc), 80)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              {data && !loader && data?.length === 0 && (
                <div className="search-sorry-text">Sorry data not found</div>
              )}
            </div>
          </div>

          <Button
            onClick={toggleDrawer("top", true)}
            className={`${searchField ? "d-none" : ""}`}
            style={{ minWidth: "38px", padding: "0" }}
          >
            <img src="/menuIcon.png" />
          </Button>
          <Drawer
            anchor={"right"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
            className="navbar__drawer"
          >
            {list("top")}
          </Drawer>
        </div>

        <div className="navbar__right">
          <div className="navbar__menu" style={{ width: "100%" }}>
            <nav className="navigation">
              <ul className="menu">
                <li
                  className={`menu-item  ${
                    router.pathname == "/" ? "active-navlink" : ""
                  } ${searchField ? "d-none" : ""}`}
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={`menu-item ${
                    router.pathname == "/colleges" ? "active-navlink" : ""
                  } ${searchField ? "d-none" : ""}`}
                >
                  <Link href="/colleges">Colleges</Link>
                </li>
                <li
                  className={`menu-item  ${
                    router.pathname == "/blogs" ? "active-navlink" : ""
                  } ${searchField ? "d-none" : ""}`}
                >
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li
                  className={`menu-item   ${
                    router.pathname == "/faq" ? "active-navlink" : ""
                  } ${searchField ? "d-none" : ""}`}
                >
                  <Link href="/faq">FAQs</Link>
                </li>
                <li
                  className={`menu-item  ${
                    router.pathname == "/contact-us" ? "active-navlink" : ""
                  } ${searchField ? "d-none" : ""}`}
                >
                  <Link href="/contact-us">Contact</Link>
                </li>
                <li
                  className={`search-item ${
                    searchField ? "search-bar-active" : "search-bar"
                  }`}
                >
                  <SearchField
                    icon={"/search.png"}
                    isSearch={searchField}
                    setSearchField={setSearchField}
                    setKeyword={setKeyword}
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <div
                    className={`${
                      keyword ? "search-result-container" : "d-none"
                    }`}
                  >
                    {loader && (
                      <div className="search-loader">
                        {" "}
                        <CircularProgress />
                      </div>
                    )}
                    {data &&
                      !loader &&
                      data?.map((item, i) => {
                        return (
                          <div className="search-item-content" key={i}>
                            <div className="search-image-content">
                              <img
                                src={
                                  item.college_logo
                                    ? item.college_logo
                                    : item.blog_imageURL
                                }
                                alt="..."
                              />
                            </div>
                            <div className="search-text-content">
                              <Link
                                href={`${
                                  item.college_slug
                                    ? `/colleges/${item.college_slug}`
                                    : `/blogs/${item.blog_slug}`
                                }`}
                              >
                                {item.name
                                  ? truncateString(item.name, 35)
                                  : truncateString(item.blog_title, 35)}
                              </Link>
                              <div className="search-text-description">
                                {item.description
                                  ? truncateString(
                                      cleanText(item.description),
                                      80
                                    )
                                  : truncateString(
                                      cleanText(item.blog_desc),
                                      80
                                    )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    {data && !loader && data?.length === 0 && (
                      <div className="search-sorry-text">
                        Sorry data not found
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="navbar__search-icon">
            <div className="search-icon"></div>
          </div>
          <div className="navbar__drawer-icon">
            <div className="drawer-icon"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Navbar };

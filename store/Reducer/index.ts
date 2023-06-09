import { combineReducers } from "redux";
import collageDetailsReducer from "./collageDetail.reducer";
import favouriteReducer from "./favourite.reducer";
import getAllBLogReducer from "./allBlog.reducer";
import getALlCollageReducer from "./allCollages.reducer";
import blogDetailsReducer from "./blogDetails.reducer";
import blog from "./blog.reducer";
import college from "./college.reducer";
import user from "./user.reducer";
import student_application from "./studentapplication.reducer";
import courses from "./courses.reducer";
import filterList from "./filterList.reducer";
import footer from "./footer.reducer";
import search from "./allSearch.reducer";
import singleBlog from "./blogDetails.reducer";
import gallery from "./gallery.reducer";
import faqs from "./faq.reducer";
import testimonial from "./testimonial.reducer";

export default combineReducers({
  collageDetails: collageDetailsReducer,
  allBlog: getAllBLogReducer,
  allCollege: getALlCollageReducer,
  blogDetails: blogDetailsReducer,
  blog: blog,
  college: college,
  user: user,
  student_application: student_application,
  courses: courses,
  filter: filterList,
  footer: footer,
  search: search,
  favourites: favouriteReducer,
  singleBlog: singleBlog,
  gallery: gallery,
  faqs: faqs,
  testimonial: testimonial,
});

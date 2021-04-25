import { combineReducers } from 'redux'
import collageDetailsReducer from './collageDetail.reducer'
import getAllBLogReducer from './allBlog.reducer'
import getALlCollageReducer from './allCollages.reducer'
import blogDetailsReducer  from './blogDetails.reducer'
import blog from './blog.reducer'
import college from './college.reducer'
import user from './user.reducer'

export default combineReducers({
    collageDetails : collageDetailsReducer,
    allBlog : getAllBLogReducer,
    allCollege : getALlCollageReducer,
    blogDetails : blogDetailsReducer,
    blog,
    college,
    user,

})

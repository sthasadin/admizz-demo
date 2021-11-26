import { GET_ALL_GALLERY } from "../const";


const inititalState = {
    gallery: {},
  
  };

  const GalleryReducer = (state = inititalState, {type,payload}) =>{
      switch (type) {
          case GET_ALL_GALLERY:
              return {
                  ...state,
                  blog:payload
              };
              default:
                  return state;
      }
  };

  export default GalleryReducer;
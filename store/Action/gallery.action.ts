import { Dispatch } from "react-redux";
import { GET_ALL_GALLERY } from "../const";
import { api } from "../api/api";


export const getGallery = (college_id: string) =>async (dispatch:Dispatch) =>{
    // console.log("hereeeee",`/gallery/${college_id}`);
    api
    .get(`/gallery/${college_id}`)
    .then((res)=>{
        dispatch({
            type:GET_ALL_GALLERY,
            payload:res.data,
        });
    })
    .catch((err)=>{
        console.log(err);
    })
   
}
import { Dispatch } from "react-redux";
import { GET_ALL_GALLERY } from "../const";
import { api } from "../api/api";


export const getGallery = () =>async (dispatch:Dispatch) =>{
    api
    .get("/gallery")
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
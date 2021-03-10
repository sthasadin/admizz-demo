import { Dispatch } from 'redux';
import { api } from '../api/api';
import { GET_COLLAGE_DETAIL } from '../const';

export const getCollageDetail = ( id : string ) => async(dispatch: Dispatch,) => {
    api.get('college/getOneCollege/?',{
        params : {
            id
        }
    })
    .then(res => {
        dispatch({
            type : GET_COLLAGE_DETAIL,
            payload : res.data
        })
    })
    .catch(err => {
        console.log(err);
    })

}
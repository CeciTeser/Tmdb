import { Video } from "../../types";
import { types } from "../types";

const initialState = {
    data: [],
    loading: false,
    error: '' , 
};

type VideosReducer = {
    type: string ,
    payload: Video[],
}


export const videosReducer = (state = initialState , action: VideosReducer) =>{

    switch(action.type){
        
        case types.videoInit : 
        return {
            ...state,
            loading: true, 
        }

        case types.videoOk : 
        return {
            ...state,
            data: action.payload,
            loading: false, 
        }

        case types.videoError: 
        return {
            ...state,
            error: { errorCode: 400},
            loading: false, 
        }

        default: 
        return state
    }

};
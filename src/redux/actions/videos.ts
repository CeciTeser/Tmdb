import {  apiTmdb } from "../../utils";
import {  Video } from "../../types";
import { types } from "../types";

// ----------GET VIDEO ------------


    export const processVideos = (itemid:number ) => { 

    return async (dispatch:any)=>{
    
        dispatch(videoStart())
    
        try {

            const response = await apiTmdb.get(`/movie/${itemid}/videos`);

            dispatch(videoOk(response.data.results))

    
        } catch (err) {
            dispatch(videoDenied(err));
        }
    };
    
};


export const videoStart =()=> ({
    type: types.videoInit,
    payload:[],
});

export const videoOk =(data: Video [])=>({
    type: types.videoOk,
    payload:data,
});

export const videoDenied =(err:any)=>({
    type: types.videoError,
    error: {
        message: err,
    }
});
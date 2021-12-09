import { mapToArray } from "../../helpers";
import { Item } from "../../types";
import { apiTmdb } from "../../utils/axios";
import { types } from "../types";

export const processMovies = () => { 

    return async (dispatch:any)=>{

        dispatch(startMovies())

        try {
            const response = await apiTmdb.get('/movie/top_rated?');
            dispatch(okMovies (mapToArray(response.data.results)));
        } catch (err) {
            dispatch(deniedMovies(err));
        }
    };
    
};

export const startMovies =()=> ({
    type: types.moviesInit,
    payload:[],
});

export const okMovies =(data: Item[])=>({
    type: types.moviesOk,
    payload:data,
});

export const deniedMovies =(err:any)=>({
    type: types.moviesError,
    error: {
        message: err,
    }
});


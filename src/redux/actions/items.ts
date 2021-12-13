import { Item } from "../../types";
import { apiTmdb } from "../../utils/axios";
import { types } from "../types";

export const processItems = () => { 

    return async (dispatch:any)=>{

        dispatch(startItems())

        try {
            const response = await apiTmdb.get('/movie/top_rated?');
            dispatch(okItems (response.data.results));
        } catch (err) {
            dispatch(deniedItems(err));
            
        }
    };
    
};

export const startItems =()=> ({
    type: types.itemsInit,
    payload:[],
});

export const okItems =(data: Item[])=>({
    type: types.itemsOk,
    payload:data,
});

export const deniedItems =(err:any)=>({
    type: types.itemsError,
    error: {
        message: err,
    }
});


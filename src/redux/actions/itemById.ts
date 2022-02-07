import { apiFirebase, apiTmdb } from "../../utils";
import { Item } from "../../types";
import { types } from "../types";

// ----------GET ITEM BY ID ------------


    export const processItemById = (itemid:string ) => { 

    return async (dispatch:any)=>{
    
        dispatch(itemByIdStart())
    
        try {

            const response = await apiTmdb.get(`/movie/${itemid}`);
            dispatch(itemByIdOk(response.data))

    
        } catch (err) {
            dispatch(itemByIdDenied(err));
        }
    };
    
};


export const itemByIdStart =()=> ({
    type: types.itemByIdInit,
    payload:[],
});

export const itemByIdOk =(data: Item [])=>({
    type: types.itemByIdOk,
    payload:data,
});

export const itemByIdDenied =(err:any)=>({
    type: types.itemByIdError,
    error: {
        message: err,
    }
});
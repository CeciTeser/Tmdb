import { Item } from "../../types";
import { apiTmdb } from "../../utils/axios";
import { types } from "../types";

type Prueba={
    page: number, 
    search: string,  

}

export const processItems = ({ page, search }: Prueba)=> {

    return async (dispatch:any)=>{

        let response;

        dispatch(startItems())

        try {

            if(search){

                response = await apiTmdb.get(`/search/multi?query=${search}&page=${page}`);
                dispatch(okItems (response.data.results));
                console.log("la resp", response.data.results)
            
            } 
            else {
                response = await apiTmdb.get(`/movie/top_rated?page=${page}`);
                dispatch(okItems (response.data.results))
            }
        }
        catch (err) {
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


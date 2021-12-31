//----------ADD ITEMS TO FIREBASE------------

import { mapToArray } from "../../helpers";
import { Item } from "../../types";
import { apiFirebase } from "../../utils";
import { types } from "../types";

export const patchWatchedByItems = (itemid:string | undefined, data:Item) => { 

    return async (dispatch:any)=>{  

        dispatch(startWatchedBy())

        try {

            await apiFirebase.patch(`/itemsList/${itemid}.json`, data)

            const response = await apiFirebase.get(`/itemsList.json`);
            
            dispatch(okWatchedBy (mapToArray(response.data)))


        } catch (err) {
            dispatch(deniedWatchedBy(err));
        }
    };
    
};

export const startWatchedBy =()=> ({
type: types.watchedByItemsInit,
payload:[],
});

export const okWatchedBy =(data: Item[])=>({
type: types.watchedByItemsOk,
payload:data,
});

export const deniedWatchedBy =(err:any)=>({
type: types.watchedByItemsError,
error: {
    message: err,
}
});

// ----------DELETE USERS ID FROM FIREBASE------------

    

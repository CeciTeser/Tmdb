import { mapToArray } from "../../helpers";
import { useAuth } from "../../hooks";
import { Item } from "../../types";
import { apiFirebase } from "../../utils";
import { types } from "../types";



//----------ADD ITEMS TO FIREBASE------------

export const processAddItems = (data: any) => { 

    return async (dispatch:any)=>{

        dispatch(startItemsList())

        try {
            
            await apiFirebase.post(`/itemsList.json`, data)

            const response = await apiFirebase.get(`/itemsList.json`);
            
            dispatch(okItemsList (mapToArray(response.data)))


        } catch (err) {
            dispatch(deniedItemsList(err));
        }
    };
    
};

export const startItemsList =()=> ({
type: types.itemsListInit,
payload:[],
});

export const okItemsList =(data: Item[])=>({
type: types.itemsListOk,
payload:data,
});

export const deniedItemsList =(err:any)=>({
type: types.itemsListError,
error: {
    message: err,
}
});


//----------DELETE ITEMS FROM FIREBASE------------

export const processDeleteItems = (itemid:string | undefined) => { 

return async (dispatch:any)=>{

    dispatch(startItemsList())

    try {
        await apiFirebase.delete(`/itemsList/${itemid}.json`);
        const response = await apiFirebase.get('/itemsList.json');
        dispatch(okItemsList (mapToArray(response.data)));

    } catch (err) {
        dispatch(deniedItemsList(err));
    }
};

};

//----------GET ITEMS LIST FROM FIREBASE------------

export const getItemsList = () => {
    
    return async (dispatch: any) => {
        dispatch(startItemsList());

        try {
            const response = await apiFirebase.get('/itemsList.json');
        
            dispatch(okItemsList (mapToArray(response.data)));

        } catch (err) {
        dispatch(deniedItemsList(err));
        }
    };
};



import { mapToArray } from "../../helpers";
import { Item } from "../../types";
import { apiFirebase } from "../../utils";
import { types } from "../types";



//----------ADD ITEMS TO DB------------

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


//----------DELETE ITEMS FROM DB------------

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

//----------GET ITEMS LIST FROM DB------------

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

import { Item } from "../../types";
import { types } from "../types";

const initialState = {
    data: [],
    loading: false,
    error: '' , 
};

type WatcehdByReducer = {
    type: string ,
    payload: Item[],
}


export const watchedByReducer = (state = initialState , action: WatcehdByReducer) =>{

    switch(action.type){
        
        case types.watchedByItemsInit : 
        return {
            ...state,
            loading: true, 
        }

        case types.watchedByItemsOk : 
        return {
            ...state,
            data: action.payload,
            loading: false, 
        }

        case types.watchedByItemsError: 
        return {
            ...state,
            error: { errorCode: 400},
            loading: false, 
        }

        default: 
        return state
    }

};
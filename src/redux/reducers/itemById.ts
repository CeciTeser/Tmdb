import { Item } from "../../types";
import { types } from "../types";

const initialState = {
    data: [],
    loading: false,
    error: '' , 
};

type ItemByIdReducer = {
    type: string ,
    payload: Item,
}


export const itemByIdReducer = (state = initialState , action: ItemByIdReducer) =>{

    switch(action.type){
        
        case types.itemByIdInit : 
        return {
            ...state,
            loading: true, 
        }

        case types.itemByIdOk : 
        return {
            ...state,
            data: action.payload,
            loading: false, 
        }

        case types.itemByIdError: 
        return {
            ...state,
            error: { errorCode: 400},
            loading: false, 
        }

        default: 
        return state
    }

};
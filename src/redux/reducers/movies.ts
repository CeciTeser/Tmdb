import { Item } from "../../types";
import { types } from "../types";

const initialState = {
    data: [],
    loading: false,  
};

type MoviesReducer = {
    type: string ,
    payload: Item[],
}


export const moviesReducer = (state = initialState , action: MoviesReducer) =>{

    switch(action.type){
        
        case types.moviesInit : 
        return {
            ...state,
            loading: true, 
        }

        case types.moviesOk : 
        return {
            data: action.payload,
            loading: false, 
        }

        case types.moviesError: 
        return {
            data: { errorCode: 400},
            loading: false, 
        }

        default: 
        return state
    }

};
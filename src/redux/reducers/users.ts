import { User } from "../../types";
import { types } from "../types";

const initialState = {
    data: [],
    loading: false, 
};

type UsersReducer = {
    type: string ,
    payload: User[],
}

export const usersReducer = (state = initialState , action: UsersReducer) =>{

    switch(action.type){
        
        case types.usersInit : 
        return {
            ...state,
            loading: true, 
        }

        case types.usersOk : 
        return {
            data: action.payload, 
            loading: false, 
        }

        case types.usersError: 
        return {
            data: { errorCode: 400},
            loading: false, 
        }

        default: 
        return state
    }

};
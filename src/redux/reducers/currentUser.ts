import { types } from "../types";

const initialState = {
    email: '',
    sessionToken:'',
    password: '',
    loading: false, 
};



export const currentUserReducer = (state = initialState , action: any) =>{

    switch(action.type){
        
        case types.currentUserInit : 
        return {
            ...state,
            loading: true, 
        }

        case types.currentUserOk : 
        return {
            email: action.payload.email,
            sessionToken:action.payload.sessionToken,
            password: action.payload.password,
            loading: false, 
        }

        case types.currentUserError: 
        return {
            data: { errorCode: 400},
            loading: false, 
        }

        default: 
        return state
    }

};
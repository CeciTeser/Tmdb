import { mapToArray } from "../../helpers";
import { User } from "../../types";
import { apiFirebase } from "../../utils";
import { types } from "../types";


export const processCurrentUser = (user: User) => {
    return async (dispatch: any) => {

        dispatch(currentUserStart());

        try {
        
            dispatch(currentUserOk(user));
            

        } catch (err) {
        dispatch(currentUserDenied(err));
        }
    };
};


export const currentUserStart =()=> ({
    type: types.currentUserInit,
    payload:[],
});

export const currentUserOk =(data: User |undefined)=>({
    type: types.currentUserOk,
    payload:data,
});

export const currentUserDenied =(err:any)=>({
    type: types.currentUserError,
    error: {
        message: err,
    }
});

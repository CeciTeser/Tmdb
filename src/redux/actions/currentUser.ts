import { User } from "../../types";
import { apiFirebase } from "../../utils";
import { types } from "../types";

// ----------GET CURRENT USER ------------

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


// ----------MODIFY CURRENTUSER TO ADD OR DELETE WATCHED OR NOT MOVIES------------


export const patchUser = (userid:string , data:User) => { 
  

    return async (dispatch:any)=>{  

        dispatch(currentUserStart());

        try {

            await apiFirebase.patch(`/users/${userid}.json`, data)

            const response = await apiFirebase.get(`/users/${userid}.json`);

            dispatch(currentUserOk (response.data))


        } catch (err) {
            dispatch(currentUserDenied(err));
        }
    };

};

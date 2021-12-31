import { mapToArray } from "../../helpers";
import { Item, User } from "../../types";
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

export const patchUser = (userid:string , data:User) => { 
  

    return async (dispatch:any)=>{  

        dispatch(currentUserStart());

        try {

            await apiFirebase.patch(`/users/${userid}.json`, data)

            const response = await apiFirebase.get(`/users.json`);
            
            dispatch(currentUserOk ((response.data)))


        } catch (err) {
            dispatch(currentUserDenied(err));
        }
    };

};


export const unpatchUser = (userid:string , itemid:string ) => { 

    return async (dispatch:any)=>{
    
        dispatch(currentUserStart())
    
        try {
            await apiFirebase.delete(`/users/${userid}/watched/${itemid}.json`);
            const response = await apiFirebase.get(`/users/${userid}.json`);
            dispatch(currentUserOk (response.data));
    
        } catch (err) {
            dispatch(currentUserDenied(err));
        }
    };
    
    };
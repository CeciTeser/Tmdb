import { mapToArray } from "../../helpers";
import { Item, User } from "../../types";
import { apiFirebase } from "../../utils/axios";
import { types } from "../types";

export const processUsers = () => { 

    return async (dispatch:any)=>{

        dispatch(startUsers())

        try {
            const response = await apiFirebase.get('/users.json');
            dispatch(okUsers (mapToArray(response.data)));
        } catch (err) {
            dispatch(deniedUsers(err));
        }
    };
    
};

export const startUsers =()=> ({
    type: types.usersInit,
    payload:[],
});

export const okUsers =(data: User[])=>({
    type: types.usersOk,
    payload:data,
});

export const deniedUsers =(err:any)=>({
    type: types.usersError,
    error: {
        message: err,
    }
});

export const deleteUsers = (user:string) => { 

    return async (dispatch:any)=>{

        dispatch(startUsers())

        try {
            await apiFirebase.delete(`/users/${user}.json`);
            const response = await apiFirebase.get('/users.json');
            dispatch(okUsers (mapToArray(response.data)));
        } catch (err) {
            dispatch(deniedUsers(err));
        }
    };
    
};

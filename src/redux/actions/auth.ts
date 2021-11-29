import { mapToArray } from "../../helpers";
import { User } from "../../types";
import { apiFirebase } from "../../utils/axios";
import { types } from "../types";

export const processAuth = () => { 

    return async (dispatch:any)=>{

        dispatch(startAuth())

        try {
            const response = await apiFirebase.get('/users.json');
            dispatch(okAuth (mapToArray(response.data)));
        } catch (err) {
            dispatch(deniedAuth(err));
        }
    };
    
};

const startAuth =()=> ({
    type: types.authInit,
    payload:[],
});

const okAuth =(data: User[])=>({
    type: types.authOk,
    payload:data,
});

const deniedAuth =(err:any)=>({
    type: types.authError,
    error: {
        message: err,
    }
});

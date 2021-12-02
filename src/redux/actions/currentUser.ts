import { User } from "../../types";
import { types } from "../types";

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

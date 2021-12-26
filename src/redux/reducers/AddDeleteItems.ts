import { Item } from "../../types"
import { types } from "../types"

const initialState = {
    items: [],
    loading: false,
    error: '' 
}

type itemsListReducer = {
    type: string ,
    payload: Item[],
}

export const itemsListReducer = (state=initialState, action: itemsListReducer) =>{
    switch(action.type) {

        case types.itemsListInit:
            return {
                ...state,
                loading: true,
            }

        case types.itemsListOk:
            return {
                items: action.payload, 
                loading: false, 
            }

        case types.itemsListError:
            return {
                error: { errorCode:400 },
                loading: false,
            }
        
        default :
            return state
    }

}
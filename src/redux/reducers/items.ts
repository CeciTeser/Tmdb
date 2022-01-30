import { Item } from "../../types";
import { types } from "../types";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

type ItemsReducer = {
  type: string;
  payload: Item[];
};

export const itemsReducer = (state = initialState, action: ItemsReducer) => {
  switch (action.type) {
    case types.itemsInit:
      return {
        ...state,
        loading: true,
      };

    case types.itemsOk:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case types.itemsError:
      return {
        ...state,
        error: { errorCode: 400 },
        loading: false,
      };

    default:
      return state;
  }
};

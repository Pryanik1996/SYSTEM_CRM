import { CLIENT_ADD, CLIENT_ADD_ALL, CLIENTS_GET_START, CLIENTS_GET_SUCCESS, CLIENTS_GET_ERROR } from "../types";

const clientReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLIENT_ADD_ALL: {
      return {...state, clients: payload}
    }
    // case CLIENT_ADD: {
    //   return [...state, payload];
    // }
    default: {
      return state;
    }
  }
};

export default clientReducer;

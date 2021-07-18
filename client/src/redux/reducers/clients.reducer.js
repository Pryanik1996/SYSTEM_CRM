import {CLIENT_EDIT, CLIENT_ADD_ALL, CLIENTS_GET_START, CLIENTS_GET_SUCCESS, CLIENTS_GET_ERROR, CLIENT_DELETE } from "../types";

const clientReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLIENT_ADD_ALL: {
      return {...state, clients: payload}
    }
    // case CLIENT_ADD: {
    //   return [...state, payload];
    // }
    case CLIENTS_GET_START: {
      return { ...state, loading: true };
    }

    case CLIENTS_GET_SUCCESS: {
      return { ...state, values: payload, loading: false, error: null };
    }

    case CLIENTS_GET_ERROR: {
      return { ...state, error: payload, loading: false };
    }
    case CLIENT_EDIT: {
      return {...state, clients: payload}
    }
    case CLIENT_DELETE: {
      return {...state, clients: payload}
    }
    default: {
      return state;
    }
  }
};

export default clientReducer;

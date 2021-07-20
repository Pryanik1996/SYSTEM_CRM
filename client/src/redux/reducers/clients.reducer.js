import {
  CLIENT_ADD_ALL,
  CLIENTS_GET_START,
  CLIENTS_GET_SUCCESS,
  CLIENTS_GET_ERROR,
} from "../types";

const clientReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLIENT_ADD_ALL: {
      return { ...state, clients: payload };
    }

    case CLIENTS_GET_START: {
      return { ...state, loading: true };
    }

    case CLIENTS_GET_SUCCESS: {
      const newValue = payload.sort(function (a, b) {
        var nameA = a.surname.toLowerCase(),
          nameB = b.surname.toLowerCase();
        if (nameA < nameB) return -1;
        // if (nameA > nameB) return 1;
        // return 0;
      });
      return { ...state, values: newValue, loading: false, error: null };
    }

    case CLIENTS_GET_ERROR: {
      return { ...state, error: payload, loading: false };
    }
    default: {
      return state;
    }
  }
};

export default clientReducer;

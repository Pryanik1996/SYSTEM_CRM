import { ORDER_ADD, ORDERS_GET_START, ORDERS_GET_SUCCESS, ORDERS_GET_ERROR } from "../types";

const orderReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case ORDER_ADD: {
      return [...state, payload];
    }
    case ORDERS_GET_START: {
      return { ...state, loading: true };
    }

    case ORDERS_GET_SUCCESS: {
      return { ...state, values: payload, loading: false, error: null };
    }

    case ORDERS_GET_ERROR: {
      return { ...state, error: payload, loading: false };
    }
    default: {
      return state;
    }
  }
};

export default orderReducer;

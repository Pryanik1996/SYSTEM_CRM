import { ORDER_ADD, ORDER_ADD_ALL, ORDER_ONE } from "../types";

const orderReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case ORDER_ADD_ALL: {
      return payload;
    }
    case ORDER_ADD: {
      return [...state, payload];
    }
    case ORDER_ONE: {
      return payload;
    }
    default: {
      return state;
    }
  }
};

export default orderReducer;

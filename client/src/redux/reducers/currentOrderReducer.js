import { ORDER_ONE } from "../types";

const orderReducer = (state = null, action) => {
  const { type, payload } = action;
  console.log("PAYLOAD===>", action);
  switch (type) {
    case ORDER_ONE: {
      return payload;
    }
    default: {
      return state;
    }
  }
};

export default orderReducer;

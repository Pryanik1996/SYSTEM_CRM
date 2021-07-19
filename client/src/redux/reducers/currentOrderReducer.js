import { ORDER_ONE, ORDER_DELETE, ORDER_COMMENT } from "../types";

const orderReducer = (state = null, action) => {
  const { type, payload } = action;
  console.log("PAYLOAD===>", action);
  switch (type) {
    case ORDER_ONE: {
      return payload;
    }
    case ORDER_DELETE: {
      return null;
    }
    case ORDER_COMMENT: {
      return payload;
    }
    default: {
      return state;
    }
  }
};

export default orderReducer;

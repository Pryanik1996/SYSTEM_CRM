import { CLIENT_ADD } from "../types";

const clientReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLIENT_ADD: {
      return payload;
    }
    default: {
      return state;
    }
  }
};

export default clientReducer;

import { CLIENT_ADD } from "../types";

const clientReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLIENT_ADD: {
      const { clients } = payload;
      return clients;
    }
    default: {
      return state;
    }
  }
};

export default clientReducer;

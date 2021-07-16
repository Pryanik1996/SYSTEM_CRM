import { WORKER_ADD } from "../types";

const workersReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case WORKER_ADD: {
      const { workers } = payload;
      return workers;
    }
    default: {
      return state;
    }
  }
};

export default workersReducer;

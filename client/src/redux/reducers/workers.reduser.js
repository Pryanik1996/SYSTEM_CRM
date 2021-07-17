import { WORKER_ADD, ALL_WORKERS } from "../types";

const workersReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case WORKER_ADD: {
      const { workers } = payload;
      return [...state, workers]
    }
    case ALL_WORKERS:{
      const { workers } = payload;
      return workers;
    }

    default: {
      return state;
    }
  }
};

export default workersReducer;

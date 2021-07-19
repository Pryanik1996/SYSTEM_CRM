import { WORKER_ADD, ALL_WORKERS, CHANGE_ADMIN } from "../types";

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
    case CHANGE_ADMIN:{
      const { id } = payload;
      return state.filter((el) => el._id !== id)
    }

    default: {
      return state;
    }
  }
};

export default workersReducer;

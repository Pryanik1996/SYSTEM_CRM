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
      let a = state.map((el) => el._id === payload._id ? {...el, isAdmin: !el.isAdmin}  : el)
      
      return a
    }

    default: {
      return state;
    }
  }
};

export default workersReducer;

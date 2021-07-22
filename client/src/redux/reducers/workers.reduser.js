import { WORKER_ADD, ALL_WORKERS, CHANGE_ADMIN } from "../types";

const workersReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case WORKER_ADD: {
      const { workers } = payload;
      return [...state, workers]
    }
    case ALL_WORKERS:{
      return payload;
    }
    case CHANGE_ADMIN:{
<<<<<<< HEAD
      let change = state.map((el) => el._id === payload._id ? {...el, isAdmin: !el.isAdmin}  : el)
=======
      let a = state?.map((el) => el._id === payload._id ? {...el, isAdmin: !el.isAdmin}  : el)
>>>>>>> d19091052e57ee859d423558f715026dcd6713f3
      
      return change
    }

    default: {
      return state;
    }
  }
};

export default workersReducer;

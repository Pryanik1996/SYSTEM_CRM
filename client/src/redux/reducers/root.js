import { combineReducers } from "redux";
import clientReducer from "./clients.reducer";
import workersReducer from "./workers.reduser";

const reducer = combineReducers({
  clients: clientReducer,
  workers: workersReducer
});

export default reducer;

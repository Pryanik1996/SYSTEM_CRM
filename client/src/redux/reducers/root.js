import { combineReducers } from "redux";
import clientReducer from "./clients.reducer";
import workersReducer from "./workers.reduser";
import orderReducer from "./order.reducer"

const reducer = combineReducers({
  clients: clientReducer,
  workers: workersReducer,
  orders: orderReducer,
});

export default reducer;

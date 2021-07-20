import { combineReducers } from "redux";
import clientReducer from "./clients.reducer";
import userReducer from "./userReducer";
import workersReducer from "./workers.reduser";
import orderReducer from "./order.reducer";
import currentClientReducer from "./currentClient.reducer"

const reducer = combineReducers({
  clients: clientReducer,
  workers: workersReducer,
  orders: orderReducer,
  user: userReducer,
  currentClient: currentClientReducer,
});
export default reducer;

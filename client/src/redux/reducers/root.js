import { combineReducers } from "redux";
import clientReducer from "./clients.reducer";
import userReducer from "./userReducer";
import currentOrderReducer from "./currentOrderReducer";
import workersReducer from "./workers.reduser";
import orderReducer from "./order.reducer";

const reducer = combineReducers({
  clients: clientReducer,
  workers: workersReducer,
  orders: orderReducer,
  user: userReducer,
  currentOrder: currentOrderReducer,
});
export default reducer;

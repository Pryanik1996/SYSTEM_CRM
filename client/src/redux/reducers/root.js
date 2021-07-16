import { combineReducers } from "redux";
import clientReducer from "./clients.reducer";
import userReducer from "./userReducer";
import workersReducer from "./workers.reduser";
import orderReducer from "./order.reducer";
import userReducer from "./userReducer";

const reducer = combineReducers({
  clients: clientReducer,
  workers: workersReducer,
  orders: orderReducer,
  user: userReducer,
});
export default reducer;

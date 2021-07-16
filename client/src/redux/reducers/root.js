import { combineReducers } from "redux";
import clientReducer from "./clients.reducer";
import orderReducer from "./order.reducer"
import userReducer from "./userReducer";


const reducer = combineReducers({
  clients: clientReducer,
  orders: orderReducer,
  user: userReducer,
});

export default reducer;

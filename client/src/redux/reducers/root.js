import { combineReducers } from "redux";
import clientReducer from "./clients.reducer";
import orderReducer from "./order.reducer"


const reducer = combineReducers({
  clients: clientReducer,
  orders: orderReducer,
});

export default reducer;

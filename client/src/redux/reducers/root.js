import { combineReducers } from "redux";
import clientReducer from "./clients.reducer";
import userReducer from "./userReducer";
import currentOrderReducer from "./currentOrderReducer";
import commentsReducer from "./commentsReducer";
import workersReducer from "./workers.reduser";
import orderReducer from "./order.reducer";
import adminsItemsReducer from "./adminsReducer";

const reducer = combineReducers({
  clients: clientReducer,
  workers: workersReducer,
  orders: orderReducer,
  user: userReducer,
  currentOrder: currentOrderReducer,
  comments: commentsReducer,
  items: adminsItemsReducer,
});
export default reducer;

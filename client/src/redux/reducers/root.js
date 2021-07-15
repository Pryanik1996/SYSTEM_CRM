import { combineReducers } from "redux";
import clientReducer from "./clients.reducer";

const reducer = combineReducers({
  clients: clientReducer,
});

export default reducer;

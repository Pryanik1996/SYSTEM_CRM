import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/root";
import initialState from "./initialState";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));



export default store;

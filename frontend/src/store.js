import { combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
// import { routerMiddleware, connectRouter } from 'connected-react-router';
// export const history = createBrowserHistory(); 

import {
  userUpdateReducer,
} from "./reducers/userReducer";

const reducer = combineReducers({
  userUpdate: userUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = configureStore (
  {reducer},
  initialState,
  // middleware: [thunk, routerMiddleware(...middleware)],
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

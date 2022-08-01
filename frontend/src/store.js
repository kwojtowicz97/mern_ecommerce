import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";

const reducer = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
};

const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cartItems"));

const initialState = { cart: { cartItems: cartItemsFromLocalStorage || [] } };

const middleware = [thunk];

const store = configureStore({
  reducer,
  preloadedState: initialState,
  middleware: middleware,
});

export default store;

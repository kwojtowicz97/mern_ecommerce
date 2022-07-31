import { applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers'

const reducer = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
}

const initialState = {}

const middleware = [thunk]

const store = configureStore({
  reducer: reducer,
  preloadedState: initialState,
  middleware: middleware,
})

export default store

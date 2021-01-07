import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  productListReducer,
  productDetailReducer,
} from './reducers/productReducers';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import { cartReducers } from './reducers/cartReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducers,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfosFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('userInfos'))
  : null;

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfos: userInfosFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

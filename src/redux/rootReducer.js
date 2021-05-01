import { combineReducers } from 'redux';
import productReducer from './Products/prodcuts.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './User/user.reducer';
import cartReducer from './Cart/cart.reducer';
import orderReducer from './Orders/orders.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  productsData: productReducer,
  cartData: cartReducer,
  orderData: orderReducer
});

const configStorage = {
  key: 'root',
  storage,
  whitelist: ['cartData']
}


export default persistReducer(configStorage, rootReducer);

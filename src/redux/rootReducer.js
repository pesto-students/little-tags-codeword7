import { combineReducers } from 'redux';
import productReducer from './Products/prodcuts.reducer';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import userReducer from './User/user.reducer';
import cartReducer from './Cart/cart.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  productsData: productReducer,
  cartData: cartReducer
});


export default rootReducer;

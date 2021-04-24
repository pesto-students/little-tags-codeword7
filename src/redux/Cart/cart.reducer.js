import cartTypes from './cart.types';
import { handleAddToCart, reduceCartProduct, removeCartProduct } from './cart.utils';

const INITIAL_STATE = {
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: handleAddToCart({
                    prevCartItems: state.cartItems,
                    nextCartItem: action.payload
                })
            };
        case cartTypes.REDUCE_CART_ITEM:
            return {
                ...state,
                cartItems: reduceCartProduct({
                    prevCartItems: state.cartItems,
                    nextCartItem: action.payload
                })
            }
        case cartTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeCartProduct({
                    prevCartItems: state.cartItems,
                    nextCartItem: action.payload
                })
            }
        case cartTypes.CLEAR_CART:
            return {
                ...state,
                ...INITIAL_STATE
            }
        default:
            return state;
    }
}

export default cartReducer;
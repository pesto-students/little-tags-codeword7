import cartTypes from './cart.types';

export const addProduct = (nextCartItem) => ({
    type: cartTypes.ADD_TO_CART,
    payload: nextCartItem
});

export const reduceCartProduct = (nextCartItem) => ({
    type: cartTypes.REDUCE_CART_ITEM,
    payload: nextCartItem
});

export const removeCartProduct = (nextCartItem) => ({
    type: cartTypes.REMOVE_CART_ITEM,
    payload: nextCartItem
});

export const clearCart = () => ({
    type: cartTypes.CLEAR_CART
})
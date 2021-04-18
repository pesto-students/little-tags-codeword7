import productTypes from './prodcuts.type';

export const fetchProductsStart = (filters={}) => ({
    type: productTypes.FETCH_PRODCUTS_START,
    payload: filters
});

export const setProducts =  products => ({
    type: productTypes.SET_PRODUCTS,
    payload: products
})  
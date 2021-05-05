import productTypes from './prodcuts.type';

export const fetchProductsStart = (filters = {}) => ({
    type: productTypes.FETCH_PRODCUTS_START,
    payload: filters
});

export const setProducts = (products = []) => ({
    type: productTypes.SET_PRODUCTS,
    payload: products
});

export const fetchProductStart = (productID) => ({
    type: productTypes.FETCH_PRODUCT_START,
    payload: productID
});

export const setProduct = (product) => ({
    type: productTypes.SET_PRODUCT,
    payload: product
})


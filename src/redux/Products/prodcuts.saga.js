import { put, takeLatest, all, call } from "@redux-saga/core/effects";
import productTypes from "./prodcuts.type";
import { handleFetchProducts, handleFetchProduct } from './products.helper';
import { setProducts, setProduct } from './products.action';

export function* fetchProducts({ payload }) {
    try {
        console.log("In fethc products", payload);
        const products = yield handleFetchProducts(payload);
        yield put(
            setProducts(products)
        )
    } catch (error) {
        console.log(error);
    }
}

export function* onFetchProductsStart() {
    yield takeLatest(productTypes.FETCH_PRODCUTS_START, fetchProducts);
}

export function* fetchProduct({ payload }) {
    try {
        const product = yield handleFetchProduct(payload);
        yield put(
            setProduct(product)
        )
    } catch (err) {
        console.log(err);
    }
}

export function* fetchProductStart() {
    yield takeLatest(productTypes.FETCH_PRODUCT_START, fetchProduct)
}

export default function* productSagas() {
    yield all([
        call(onFetchProductsStart),
        call(fetchProductStart)
    ])
}
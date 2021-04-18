import { put, takeLatest, all, call } from "@redux-saga/core/effects";
import productTypes from "./prodcuts.type";
import { handleFetchProducts } from './products.helper';
import { setProducts } from './products.action';

export function* fetchProducts({ payload }) {
    try {
        console.log("In fethc products", payload);
        const products = yield handleFetchProducts(payload);
        yield put(
            setProducts(products)
        )
    } catch(error) {
        console.log(error);
    }
}

export function* onFetchProductsStart() {
    yield takeLatest(productTypes.FETCH_PRODCUTS_START, fetchProducts);
}

export default function* productSagas() {
    yield all([
        call(onFetchProductsStart)
    ])
}
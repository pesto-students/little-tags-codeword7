import orderTypes from './orders.type';
import { takeLatest, put, call, all } from 'redux-saga/effects';
import { auth } from '../../Config/Firebase/util';
import { handleSaveOrder, handleGetOrderHistory, handleGetOrder } from './orders.helper';
import { clearCart } from '../Cart/cart.action';
import { setOrderDetail, setOrderHistory } from './orders.action';
// import { userCheckedInSucess } from '../User/user.actions';

export function* saveOrder({ payload }) {
    console.log("In order Saga", { ...payload });
    try {
        const timeStamps = new Date();
        yield handleSaveOrder({
            ...payload,
            orderUserId: auth.currentUser.uid,
            orderCreatedDate: timeStamps
        });
        yield put(
            clearCart()
        )
    } catch (err) {
        console.log(err);
    }
}

export function* onSaveOrderHistoryStart() {

    yield takeLatest(orderTypes.SAVE_ORDER_HISTORY_START, saveOrder);
}

export function* getOrderHistory({ payload }) {

    try {
        const history = yield handleGetOrderHistory(payload);
        yield put(
            setOrderHistory(history)
        )
    } catch (err) {
        console.log(err.message);
    }
}

export function* onGetOrderHistoryStart() {
    yield takeLatest(orderTypes.GET_USER_ORDER_HISTORY_START, getOrderHistory)
}

export function* getOrderDetail({ payload }) {
    try {
        const order = yield handleGetOrder(payload);

        yield put(
            setOrderDetail(order)
        )
    } catch (error) {
        console.log(error.message);
    }
}

export function* onGetOrderDetailStart() {
    yield takeLatest(orderTypes.GET_ORDER_DETAIL_START, getOrderDetail)
}


export default function* orderSagas() {
    yield all([
        call(onSaveOrderHistoryStart),
        call(onGetOrderHistoryStart)
    ])
}
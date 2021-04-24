import orderTypes from './orders.type';

export const saveOrderHistory = (order) => ({
    type: orderTypes.SAVE_ORDER_HISTORY_START,
    payload: order
});

export const getOrderHistory = uid => ({
    type: orderTypes.GET_USER_ORDER_HISTORY_START,
    payload: uid
});

export const setOrderHistory = history => ({
    type: orderTypes.SET_ORDER_HISTORY,
    payload: history
});

export const getOrderDetailStart = orderID => ({
    type: orderTypes.GET_ORDER_DETAIL_START,
    payload: orderID
});

export const setOrderDetail = order => ({
    type: orderTypes.SET_ORDER_DETAIL,
    payload: order
})
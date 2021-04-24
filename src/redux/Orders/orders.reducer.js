import orderTypes from './orders.type';

const INITIAL_STATE = {
    orderHistory: [],
    orderDetails: {},
}

const orderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case orderTypes.SET_ORDER_HISTORY:
            return {
                ...state,
                orderHistory: action.payload
            }
        case orderTypes.SET_ORDER_DETAIL:
            return {
                ...state,
                orderDetails: action.payload
            }
        default:
            return state;
    }
}

export default orderReducer;
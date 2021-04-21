import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderHistory } from '../../redux/Orders/orders.action';
import orderSagas from '../../redux/Orders/orders.sagas';

const mapState = ({ user, orderData }) => ({
    currentUser: user.currentUser,
    orderHistory: orderData.orderHistory.data
})

const OrderHistory = () => {

    const dispatch = useDispatch();
    const { currentUser, orderHistory } = useSelector(mapState);

    useEffect(() => {
        dispatch(
            getOrderHistory(currentUser)
        );

    }, []);

    return (
        <div>
            <div>
                <h2>Order History</h2>
            </div>
            <div>
                {(Array.isArray(orderHistory) && orderSagas.length > 0) && orderHistory.map((order, pos) => (
                    <div>
                        <div>{order.documentID}</div>
                        <div>{order.createdDate}</div>
                        <div>{order.total}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OrderHistory;
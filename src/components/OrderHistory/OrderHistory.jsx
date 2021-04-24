import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderHistory } from '../../redux/Orders/orders.action';
// import orderSagas from '../../redux/Orders/orders.sagas';
import './OrderHistory.scss';
import moment from 'moment';

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

    const formatText = (orderDate) => {
        return moment(orderDate.nano).format('DD/MM/YY');
    }

    return (
        <div className="order-history-main">
            <div className="order-history-header">
                <h2>Order History</h2>
            </div>
            {console.log(orderHistory)}
            <div className="order-col">
                <div className="order-row">
                    <div className="order-heading">Order ID</div>
                    <div className="order-heading">Order Date</div>
                    <div className="order-heading">Order Total</div>
                </div>
                {(Array.isArray(orderHistory) && orderHistory.length > 0) && orderHistory.map((order, pos) => {
                    const { documentID, orderCreatedDate, orderTotal } = order;
                    const orderDate = formatText(orderCreatedDate)
                    return (

                        <div className="order-row">
                            <div className="order-id">{documentID}</div>
                            <div>{orderDate}</div>
                            <div>{orderTotal}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OrderHistory;
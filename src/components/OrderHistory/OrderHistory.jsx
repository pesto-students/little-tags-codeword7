import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderHistory } from '../../redux/Orders/orders.action';
// import orderSagas from '../../redux/Orders/orders.sagas';
import './OrderHistory.scss';
import moment from 'moment';
import withTranslator from '../../hoc/withTranslation';

const mapState = ({ user, orderData }) => ({
    currentUser: user.currentUser,
    orderHistory: orderData.orderHistory.data
})

const OrderHistory = (props) => {

    const dispatch = useDispatch();
    const { currentUser, orderHistory } = useSelector(mapState);

    useEffect(() => {
        dispatch(
            getOrderHistory(currentUser)
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const formatText = (orderDate) => {
        return moment(orderDate.nenoseconds).format('DD/MM/YY');
    }

    return (
        <div className="order-history-main">
            <div className="order-history-header">
                <h2>{props.strings.OrderHistory}</h2>
            </div>
            <div className="order-col">
                <div className="order-row">
                    <div className="order-heading">{props.strings.OrderId}</div>
                    <div className="order-heading">{props.strings.OrderDate}</div>
                    <div className="order-heading">{props.strings.OrderTotal}</div>
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

OrderHistory.defaultProps = {
    strings: {
        OrderHistory: "Order History",
        OrderId: "Order ID",
        OrderDate: "Order Date",
        OrderTotal: "Order Total",
    }
}

export default withTranslator('OrderHistoryComponent')(OrderHistory);
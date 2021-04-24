import React from 'react';
import './OrderSuccessConfirmation.scss';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const OrderSuccessConfirmation = () => {
    return (
        <div className="order-success-wrapper">
            <div className="order-success-card">
                <IoIosCheckmarkCircle className="order-success-mark" />
                <h3 className="order-success-header">Thank You for your purchase!</h3>
                <div className="order-sucess-detail">
                    Transaction# 4623768390836
                </div>
                <div className="success-order-contact">
                    <p>If you have any questions or concerns regarding this, do not hesitate to contact us at <br />testuser@tags.com</p>
                </div>
            </div>
        </div>

    );
}

export default OrderSuccessConfirmation;

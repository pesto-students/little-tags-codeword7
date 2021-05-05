import React from 'react';
import './OrderSuccessConfirmation.scss';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import withTranslator from '../../hoc/withTranslation';

const OrderSuccessConfirmation = (props) => {
    return (
        <div className="order-success-wrapper">
            <div className="order-success-card">
                <IoIosCheckmarkCircle className="order-success-mark" />
                <h3 className="order-success-header">{props.strings.ThankYouForYourPurchase}</h3>
                <div className="order-sucess-detail">
                    {props.strings.Transaction}# 4623768390836
                </div>
                <div className="success-order-contact">
                    <p>{props.strings.IfYouHaveAnyQuestionsOrConcernsRegardingThisDoNotHesitateToContactUsAt} <br />testuser@tags.com</p>
                </div>
            </div>
        </div>

    );
}

OrderSuccessConfirmation.defaultProps = {
    strings: {
        ThankYouForYourPurchase: "Thank You for your purchase!",
        Transaction: "Transaction",
        IfYouHaveAnyQuestionsOrConcernsRegardingThisDoNotHesitateToContactUsAt: "If you have any questions or concerns regarding this, do not hesitate to contact us at"
    }
}

export default withTranslator('OrderSuccessConfirmationComponent')(OrderSuccessConfirmation);

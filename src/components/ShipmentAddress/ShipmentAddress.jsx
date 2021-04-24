import "./ShipmentAddress.scss";
import FormInput from '../../UI/FormInput/FormInput';
import React, { useState, useRef } from "react";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal, selectCartItemsCount } from "../../redux/Cart/cart.selector";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { saveOrderHistory } from '../../redux/Orders/orders.action';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { apiInstance } from '../../config/api';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_RL2GR96Y8K0U9JkBXnks2v2v');


const initialAddressState = {
  line1: '',
  line2: '',
  city: '',
  state: '',
  postal_code: '',
}

const mapState = createStructuredSelector({
  total: selectCartTotal,
  itemCount: selectCartItemsCount,
  cartItems: selectCartItems
})

export default function ShipmentAddress() {

  const [recipientFirstName, setRecipientFirstName] = useState('');
  const [recipientLastName, setRecipientLastName] = useState('');
  const [billingAddress, setBillingAddress] = useState({ ...initialAddressState });
  const [contactNo, setContactNo] = useState('');
  const [emailId, setEmailId] = useState('');
  const { cartItems, total } = useSelector(mapState);
  const stripe = useStripe();
  const elements = useElements();
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleShipping = async (evt) => {

    const stripe = await stripePromise;
    const { name, value } = evt.target;
    setBillingAddress({
      ...billingAddress,
      [name]: value
    })
  }

  const handleFormSubmit = async () => {

    const checkoutData = cartItems.map((item) => {
      return {
        price_data: {
          currency: 'INR',
          product_data: {
            name: item.title
          },
          unit_amount: item.price * 100
        },
        quantity: item.quantity
      }
    });

    // const response = await fetch('/create-checkout-session', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(checkoutData)
    // });

    // const session = await response.json();
    // const result = await stripe.redirectToCheckout({
    //   sessionId: session.id,
    // });

    // if (result.error) {
    //   console.log('Error', result.error.message)
    // } else {
    //   console.log('Result', result)
    // }

    const configOrder = {
      orderTotal: total,
      orderItems: cartItems.map(item => {
        const { id, image, title, price, quantity } = item;
        return { id, image, title, price, quantity }
      }
      )
    };
    dispatch(
      saveOrderHistory(configOrder)
    );
    history.push('/orderSuccess');
  }


  return (
    <div className="checkout">
      <div className="address">
        <div className="title">
          <h3 className="billing-title">Billing and Shipping</h3>
        </div>
        <div className="shipping-form">
          <form>
            <div className="form-name-wrapper">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <FormInput
                  placeholder="First Name"
                  name="recipientFirstName"
                  handleOnChange={evt => setRecipientFirstName(evt.target.value)}
                  value={recipientFirstName}
                  type="text"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <FormInput
                  placeholder="Last Name"
                  name="recipientLastName"
                  handleOnChange={evt => setRecipientLastName(evt.target.value)}
                  value={recipientFirstName}
                  type="text"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Street Address</label>
              <FormInput
                placeholder="Street Address1"
                name="line1"
                handleOnChange={evt => handleShipping(evt)}
                value={billingAddress.line1}
                type="text"
              />
              <FormInput
                placeholder="Street Address2"
                name="line2"
                handleOnChange={evt => handleShipping(evt)}
                value={billingAddress.line2}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Town / City</label>
              <FormInput
                placeholder="City"
                name="city"
                handleOnChange={evt => handleShipping(evt)}
                value={billingAddress.city}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="form-label">State</label>
              <FormInput
                placeholder="State"
                name="state"
                handleOnChange={evt => handleShipping(evt)}
                value={billingAddress.state}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Postal / ZIP</label>
              <FormInput
                placeholder="State"
                name="postal_code"
                handleOnChange={evt => handleShipping(evt)}
                value={billingAddress.postal_code}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <FormInput
                placeholder="Contact Number"
                name="contactNo"
                handleOnChange={evt => setContactNo(evt)}
                value={contactNo}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Addrss</label>
              <FormInput
                placeholder="Email Address"
                name="emailId"
                handleOnChange={evt => setEmailId(evt.target.value)}
                value={emailId}
                type="text"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="payment">
        <div className="title">
          <h3 className="billing-title">My Orders</h3>
        </div>
        <div className="products">
          <div className="product-title-group">
            <div className="product-title-label product-label-1">Product</div>
            <div className="product-title-label">Total</div>
          </div>
          <div className="checkout-products">
            {cartItems.map(item => {
              return (
                <div className="product-wrap">
                  <div className="checkout-product">
                    <img
                      src={item.image}
                      alt=""
                      className="checkout-product-img"
                    />
                    <h6 className="product-label">{item.title}</h6>
                    <div>
                      <h6 className="checkout-product-price">{item.price}</h6>
                    </div>
                  </div>
                </div>
              )
            })}
            <div className="product-wrap">
              <div className="checkout-total-wrap">
                <div className="checkout-total">
                  <div className="checkout-total-title">Subtotal</div>
                  <div className="checkout-product-value">{total}</div>
                </div>
                <div className="checkout-total">
                  <div className="checkout-total-title">Shipping</div>
                  <div className="checkout-product-value">Free</div>
                </div>
                <div className="checkout-total">
                  <div className="checkout-total-title">Discount</div>
                  <div className="checkout-product-value">-500</div>
                </div>
                <div className="checkout-total">
                  <div className="checkout-total-title">Total</div>
                  <div className="checkout-product-value total-checkout-price">
                    {total - 500}
                  </div>
                </div>
              </div>
            </div>
            <div className="product-wrap">
              <div className="payment-methods">
                {/* <div className="payment-method">
                  <input type="radio" />
                  <label className="method-label">Paytm</label>
                </div>
                <div className="payment-method">
                  <input type="radio" />
                  <label className="method-label">BHIM UPI</label>
                </div>
                <div className="payment-method">
                  <input type="radio" />
                  <label className="method-label">CCAvenue</label>
                </div>
                <div className="payment-method">
                  <input type="radio" />
                  <label className="method-label">Debit / Credit Card</label>
                </div> */}
                {/* <CardElement
                  options={configCardElement}
                /> */}
              </div>
            </div>
            <div className="product-wrap">
              <div className="product-checkout-btn" onClick={handleFormSubmit}>
                <button className="payment-checkout-button">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

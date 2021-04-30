import "./ShipmentAddress.scss";
import FormInput from '../../UI/FormInput/FormInput';
import priceFormatter from '../../Utility/priceFormatter';
import React, { useState } from "react";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal, selectCartItemsCount } from "../../redux/Cart/cart.selector";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { saveOrderHistory } from '../../redux/Orders/orders.action';
import { loadStripe } from '@stripe/stripe-js';
import withTranslator from "../../hoc/withTranslation";
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

function ShipmentAddress(props) {

  const [recipientFirstName, setRecipientFirstName] = useState('');
  const [recipientLastName, setRecipientLastName] = useState('');
  const [billingAddress, setBillingAddress] = useState({ ...initialAddressState });
  const [contactNo, setContactNo] = useState('');
  const [emailId, setEmailId] = useState('');
  const { cartItems, total } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleShipping = async (evt) => {

    const { name, value } = evt.target;
    setBillingAddress({
      ...billingAddress,
      [name]: value
    })
  }

  const handleFormSubmit = async () => {
    const stripe = await stripePromise;

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
    const configOrder = {
      orderTotal: total,
      userName: recipientFirstName + recipientLastName,
      orderItems: cartItems.map(item => {
        const { id, image, title, price, quantity } = item;
        return { id, image, title, price, quantity }
      }
      )
    };
    dispatch(
      saveOrderHistory(configOrder)
    );
    const response = await fetch('https://stripe-api-ecom.herokuapp.com/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(checkoutData)
    });

    const session = await response.json();
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log('Error', result.error.message)
    } else {
      console.log('Result', result)
    }

    history.push('/orderSuccess');
  }


  return (
    <div className="checkout">
      <div className="address">
        <div className="title">
          <h3 className="billing-title">{props.strings.BillingAndShipping}</h3>
        </div>
        <div className="shipping-form">
          <form>
            <div className="form-name-wrapper">
              <div className="form-group">
                <label className="form-label">{props.strings.FirstName}</label>
                <FormInput
                  placeholder="First Name"
                  name="recipientFirstName"
                  handleOnChange={evt => setRecipientFirstName(evt.target.value)}
                  value={recipientFirstName}
                  type="text"
                />
              </div>
              <div className="form-group">
                <label className="form-label">{props.strings.LastName}</label>
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
              <label className="form-label">{props.strings.StreetAddress}</label>
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
              <label className="form-label">{props.strings.City}</label>
              <FormInput
                placeholder="City"
                name="city"
                handleOnChange={evt => handleShipping(evt)}
                value={billingAddress.city}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="form-label">{props.strings.State}</label>
              <FormInput
                placeholder="State"
                name="state"
                handleOnChange={evt => handleShipping(evt)}
                value={billingAddress.state}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="form-label">{props.strings.Postal}</label>
              <FormInput
                placeholder="State"
                name="postal_code"
                handleOnChange={evt => handleShipping(evt)}
                value={billingAddress.postal_code}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="form-label">{props.strings.Phone}</label>
              <FormInput
                placeholder="Contact Number"
                name="contactNo"
                handleOnChange={evt => setContactNo(evt)}
                value={contactNo}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="form-label">{props.strings.EmailAddress}s</label>
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
          <h3 className="billing-title">{props.strings.MyOrders}</h3>
        </div>
        <div className="products">
          <div className="product-title-group">
            <div className="product-title-label product-label-1">{props.strings.Product}</div>
            <div className="product-title-label">{props.strings.GrandTotal}</div>
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
                      <h6 className="checkout-product-price">{priceFormatter(item.price)}</h6>
                    </div>
                  </div>
                </div>
              )
            })}
            <div className="product-wrap">
              <div className="checkout-total-wrap">
                <div className="checkout-total">
                  <div className="checkout-total-title">{props.strings.Subtotal}</div>
                  <div className="checkout-product-value">{priceFormatter(total)}</div>
                </div>
                <div className="checkout-total">
                  <div className="checkout-total-title">{props.strings.Shipping}</div>
                  <div className="checkout-product-value">{props.strings.Free}</div>
                </div>
                <div className="checkout-total">
                  <div className="checkout-total-title">{props.strings.GrandTotal}</div>
                  <div className="checkout-product-value total-checkout-price">
                    {priceFormatter(total)}
                  </div>
                </div>
              </div>
            </div>

            <div className="product-wrap">
              <div className="product-checkout-btn" onClick={handleFormSubmit}>
                <button className="payment-checkout-button">{props.strings.PlaceOrder}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ShipmentAddress.defaultProps = {
  strings: {
    BillingAndShipping: "Billing and Shipping",
    FirstName: "First Name",
    LastName: "Last Name",
    StreetAddress: "Street Address",
    City: "City",
    State: "State",
    Postal: "Postal",
    Phone: "Phone Number",
    EmailAddress: "EmailAddress",
    MyOrders: "MyOrders",
    Product: "Product",
    Subtotal: "Subtotal",
    Shipping: "Shipping",
    Free: "Free",
    GrandTotal: "Grand Total",
    PlaceOrder: "Place Order"
  }
}

export default withTranslator('ShipmentAddress')(ShipmentAddress);

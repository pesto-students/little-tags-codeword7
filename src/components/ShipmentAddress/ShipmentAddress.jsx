import "./ShipmentAddress.scss";
// import FormInput from '../../UI/FormInput/FormInput';
import priceFormatter from '../../Utility/priceFormatter';
import React from "react";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal, selectCartItemsCount } from "../../redux/Cart/cart.selector";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { saveOrderHistory } from '../../redux/Orders/orders.action';
import { userCheckedInSucess } from '../../redux/User/user.actions';
import { addAddressModal } from '../../redux/User/user.actions'
import { loadStripe } from '@stripe/stripe-js';
import withTranslator from "../../hoc/withTranslation";
import { BsPlusCircle } from 'react-icons/bs';
import AddressDetailCard from '../AddressDetailCard/AddressDetailCard'
const stripePromise = loadStripe('pk_test_RL2GR96Y8K0U9JkBXnks2v2v');





const mapState = createStructuredSelector({
  total: selectCartTotal,
  itemCount: selectCartItemsCount,
  cartItems: selectCartItems
});

const userMapState = ({ user }) => ({
  userAddress: user.currentUser.userAddress
})

function ShipmentAddress(props) {


  const { cartItems, total } = useSelector(mapState);
  const { userAddress } = useSelector(userMapState);
  const dispatch = useDispatch();
  const history = useHistory();
  let selectedUserAddress = {};

  const onAddressChanged = (event) => {
    selectedUserAddress = userAddress[event.target.value];
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
      userData: selectedUserAddress,
      orderItems: cartItems.map(item => {
        const { id, image, title, price, quantity } = item;
        return { id, image, title, price, quantity }
      }
      )
    };
    dispatch(userCheckedInSucess(true));
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
        <div className="shipping-address-data">
          {userAddress.length > 0 && userAddress.map((address, index) =>
            <AddressDetailCard Address={address} index={index} onAddressChanged={onAddressChanged} />
          )}

          <div className="shipping-address">
            <BsPlusCircle className="add-circle" onClick={() => dispatch(addAddressModal(true))} /><span className="add-new-address-text">Add new Address</span>
          </div>
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
                      src={item.image[0]}
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

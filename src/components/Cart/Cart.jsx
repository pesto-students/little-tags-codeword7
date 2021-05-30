import "./Cart.scss";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/Cart/cart.selector';
import { addProduct, reduceCartProduct, removeCartProduct } from '../../redux/Cart/cart.action';
import { useHistory } from "react-router";
// import { ToastContainer, toast } from 'react-toastify';
import priceFormatter from '../../Utility/priceFormatter';
import withTranslator from "../../hoc/withTranslation";

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

function Cart(props) {

  const dispatch = useDispatch();
  const { cartItems, total } = useSelector(mapState);
  const errMsg = 'You have no items in your cart.';
  const history = useHistory();

  const addCartItem = (product) => {
    dispatch(
      addProduct(product)
    );
  }

  const reduceCartItem = (product) => {
    dispatch(
      reduceCartProduct(product)
    );
  }

  const removeCartItem = (product) => {
    dispatch(
      removeCartProduct(product)
    );
  }

  return (
    <div className="cart-wrapper">

      <h3 className="bag-heading">{props.strings.YourBag} ({cartItems.length} Items)</h3>
      {cartItems.length > 0 ? (
        <div className="main-bag">
          <div className="cart-item">
            {cartItems.map((item, pos) => {
              return (
                <div className="bag-item">
                  <img
                    src={item.image[0]}
                    alt=""
                    className="item-img"
                  />
                  <h6 className="item-title">{item.title}</h6>
                  <div className="quantity">
                    <div className="item-qty">
                      <BiMinus onClick={() => reduceCartItem(item)} />
                      <div>{item.quantity}</div>
                      <BiPlus onClick={() => addCartItem(item)} />
                    </div>
                  </div>
                  <div className="remove-item">
                    <div className="remove" onClick={() => removeCartItem(item)}>{props.strings.Remove}</div>
                  </div>
                </div>
              )
            })}
            <div className="cart-line-2"></div>
          </div>
          <div className="checkout-item">
            <div className="checkout-wrapper">
              <div className="sub-total">
                <div className="cart-item-title">{props.strings.Subtotal}:</div>
                <div className="cart-item-price">{priceFormatter(total)}</div>
              </div>
              <div className="shipping">
                <div className="cart-item-title">{props.strings.Shipping}:</div>
                <div className="cart-item-price">Free</div>
              </div>
              <div className="cart-line-1"></div>
              <div className="grand-total">
                <div className="cart-item-title">{props.strings.GrandTotal}:</div>
                <div className="cart-item-price">{priceFormatter(total)}</div>
              </div>
            </div>
            <div className="checkout-btn">
              <button className="checkout-button" onClick={() => history.push('/payment')}>{props.strings.Checkout}</button>
            </div>
          </div>
        </div>
      ) : (
        <p>
          {errMsg}
        </p>
      )}

    </div>
  );
}

Cart.defaultProps = {
  strings: {
    YourBag: "Your Bag",
    Remove: "Remove",
    Subtotal: "Subtotal",
    Shipping: "Shipping",
    Free: "Free",
    GrandTotal: "Grand Total",
    Checkout: "Checkout"
  }
}

export default withTranslator('CartComponent')(Cart);

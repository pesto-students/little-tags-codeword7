import "./Cart.scss";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useSelector } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal} from '../../redux/Cart/cart.selector';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default function Cart() {

  const { cartItems, total } = useSelector(mapState);
  const errMsg = 'You have no items in your cart.';

  return (
    <div className="wrapper">
      <h3 className="bag-heading">Your Bag (3 Items)</h3>
      <div className="main-bag">
        {cartItems.length > 0 ? (
          <div>
            <div className="cart-item">
              {cartItems.map((item, pos) => {
                return (
                  <div className="bag-item">
                    <img
                      src={item.image}
                      alt=""
                      className="item-img"
                    />
                    <h6 className="item-title">{item.title}</h6>
                    <div className="quantity">
                      <div className="item-qty">
                        <BiMinus />
                        <div>{item.quantity}</div>
                        <BiPlus />
                      </div>
                    </div>
                    <div className="remove-item">
                      <div className="remove">Remove</div>
                    </div>
                  </div>
                )
              })}
            <div className="cart-line-2"></div>
          </div>
            <div>
              <div className="checkout-wrapper">
                <div className="sub-total">
                  <div className="cart-item-title">Subtotal:</div>
                  <div className="cart-item-price">500$</div>
                </div>
                <div className="shipping">
                  <div className="cart-item-title">Shipping:</div>
                  <div className="cart-item-price">Free</div>
                </div>
                <div className="cart-line-1"></div>
                <div className="grand-total">
                  <div className="cart-item-title">Grand Total:</div>
                  <div className="cart-item-price">{total}</div>
                </div>
              </div>
              <div className="checkout-btn">
                <button className="checkout-button">Checkout</button>
              </div>
            </div>
          </div>
        ) : (
          <p>
            {errMsg}
          </p>
        )}
      </div>
    </div>
  );
}

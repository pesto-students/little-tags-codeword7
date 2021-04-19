import "./Cart.scss";
import { BiPlus, BiMinus } from "react-icons/bi";

export default function Cart() {
  return (
    <div className="wrapper">
      <h3 className="bag-heading">Your Bag (3 Items)</h3>
      <div className="main-bag">
        <div className="cart-item">
          <div className="bag-item">
            <img
              src="https://syncspider.com/wp-content/uploads/2019/07/1keagan-henman-xPJYL0l5Ii8-unsplash-e1562931127955.jpg"
              alt=""
              className="item-img"
            />
            <h6 className="item-title">Drench & quence Serum</h6>
            <div className="quantity">
              <div className="item-qty">
                <BiMinus />
                <div>2</div>
                <BiPlus />
              </div>
            </div>
            <div className="remove-item">
              <div className="remove">Remove</div>
            </div>
          </div>
          <div className="bag-item">
            <img
              src="https://syncspider.com/wp-content/uploads/2019/07/1keagan-henman-xPJYL0l5Ii8-unsplash-e1562931127955.jpg"
              alt=""
              className="item-img"
            />
            <h6 className="item-title">Drench & quence Serum</h6>
            <div className="quantity">
              <div className="item-qty">
                <BiMinus />
                <div>2</div>
                <BiPlus />
              </div>
            </div>
            <div className="remove-item">
              <div className="remove">Remove</div>
            </div>
          </div>
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
              <div className="cart-item-price">800$</div>
            </div>
          </div>
          <div className="checkout-btn">
            <button className="checkout-button">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

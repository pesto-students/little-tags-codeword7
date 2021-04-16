import "./ShipmentAddress.scss";

export default function ShipmentAddress() {
  return (
    <div className="checkout">
      <div className="address">
        <div className="title">
          <h3 className="billing-title">Billing and Shipping</h3>
        </div>
        <div className="shipping-form">
          <form>
            <div className="form-group">
              <label className="form-label">
                Specify which item you would like to wrapped and message for
                your Gift Card(Optional)
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="Gift Wrap"
              />
            </div>
            <div className="form-name-wrapper">
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Street Address</label>
              <input
                className="form-input street-address-1"
                type="text"
                placeholder="Street Address1"
              />
              <input
                className="form-input"
                type="text"
                placeholder="Street Address2"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Town / City</label>
              <input
                className="form-input"
                type="text"
                placeholder="Town / City"
              />
            </div>
            <div className="form-group">
              <label className="form-label">State / Country</label>
              <input
                className="form-input"
                type="text"
                placeholder="State / Country"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Postal / ZIP</label>
              <input
                className="form-input"
                type="text"
                placeholder="Postal / ZIP"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input className="form-input" type="text" placeholder="Phone" />
            </div>
            <div className="form-group">
              <label className="form-label">Email Addrss</label>
              <input
                className="form-input"
                type="text"
                placeholder="Email Address"
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
            <div className="product-wrap">
            <div className="checkout-product">
              <img
                src="https://syncspider.com/wp-content/uploads/2019/07/1keagan-henman-xPJYL0l5Ii8-unsplash-e1562931127955.jpg"
                alt=""
                className="checkout-product-img"
              />
              <h6 className="product-label">Drench & quence Serum</h6>
              <div>
                <h6 className="checkout-product-price">55500</h6>
              </div>
            </div>
            </div>
            <div className="product-wrap">
            <div className="checkout-product">
              <img
                src="https://syncspider.com/wp-content/uploads/2019/07/1keagan-henman-xPJYL0l5Ii8-unsplash-e1562931127955.jpg"
                alt=""
                className="checkout-product-img"
              />
              <h6 className="product-label">Drench & quence Serum</h6>
              <div>
                <h6 className="checkout-product-price">55500</h6>
              </div>
            </div>
            </div>
            <div className="product-wrap">
            <div className="checkout-total-wrap">
              <div className="checkout-total">
                <div className="checkout-total-title">Subtotal</div>
                <div className="checkout-product-value">5500</div>
              </div>
              <div className="checkout-total">
                <div className="checkout-total-title">Shipping</div>
                <div className="checkout-product-value">Shipping</div>
              </div>
              <div className="checkout-total">
                <div className="checkout-total-title">Discount</div>
                <div className="checkout-product-value">-500</div>
              </div>
              <div className="checkout-total">
                <div className="checkout-total-title">Total</div>
                <div className="checkout-product-value total-checkout-price">
                  7500
                </div>
              </div>
            </div>
            </div>
            <div className="product-wrap">
            <div className="payment-methods">
              <div className="payment-method">
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
              </div>
            </div>
            </div>
            <div className="product-wrap">
            <div className="product-checkout-btn">
                <button className="checkout-button">Place Order</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

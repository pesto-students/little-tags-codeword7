import React from 'react';
import './HomeBanner.scss';
import { Link } from 'react-router-dom';
import withTranslator from '../../hoc/withTranslation';

const HomeBanner = (props) => (
  <section className="HomeBanner">
    <div className="banner-wrapper">
      <div className="left-banner-text">
        <div><p className="for-text">{props.strings.For}</p><p className="online-text"> {props.strings.Online} </p><p className="for-text">{props.strings.Order}</p></div>
        <div className="discount-horizontal">
          <div className="discount-text"><p className="">30% </p><p>{props.strings.Off}</p></div>
        </div>
      </div>
      <div className="right-banner-text">
        <div className="new-arrival">{props.strings.NewArrivals}</div>
        <div>
          <p className="just-text">{props.strings.Just}</p>
          <p className="just-text for-space">{props.strings.For}</p>
          <p className="just-text for-space">{props.strings.You}</p>
        </div>
        <div>
          <button className="banner-shop-now"><Link className="link" to="/products">
            {props.strings.ShopNow}
          </Link></button>
        </div>
      </div>
    </div>

  </section>
);

HomeBanner.defaultProps = {
  strings: {
    Online: "ONLINE",
    Order: "ORDER",
    Off: "OFF",
    NewArrivals: "New Arrivals",
    Just: "Just",
    For: "For",
    You: "You",
    ShopNow: "Shop Now"
  }
}


export default withTranslator('HomaBannerComponent')(HomeBanner);

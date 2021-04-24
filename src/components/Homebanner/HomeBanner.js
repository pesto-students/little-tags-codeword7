import React from 'react';
import './HomeBanner.scss';
import { Link } from 'react-router-dom';

const HomeBanner = () => (
  <section className="HomeBanner">
    {/* <div className="bannerText">
      <h2>Online Free Market for Clothes</h2>
      <p>Its time to recycle</p>
      <button><Link to="/products">
            Shop Now
          </Link></button>
    </div> */}
    <div className="banner-wrapper">
      <div className="left-banner-text">
        <div><p className="for-text">For</p><p className="online-text"> ONLINE </p><p className="for-text"> ORDER</p></div>
        <div className="discount-horizontal">
          <div className="discount-text"><p className="">30% </p><p>OFF</p></div>
        </div>
      </div>
      <div className="right-banner-text">
        <div className="new-arrival">New Arrivals</div>
        <div>
          <p className="just-text">Just</p>
          <p className="just-text for-space">For</p>
          <p className="just-text for-space">You</p>
        </div>
        <div>
          <button className="banner-shop-now"><Link className="link" to="/products">
            Shop Now
          </Link></button>
        </div>
      </div>
    </div>

  </section>
);

export default HomeBanner;

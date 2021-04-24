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
    <div>
      <div className="left-banner-text">
        <div><p className="for-text">For</p><p className="online-text"> ONLINE </p><p className="for-text"> ORDER</p></div>
        <div className="discount-horizontal">
          <div className="discount-text"><p className="">30% </p><p>OFF</p></div>
        </div>
      </div>
    </div>

  </section>
);

export default HomeBanner;

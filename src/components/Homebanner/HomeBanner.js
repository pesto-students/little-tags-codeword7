import React from 'react';
import './HomeBanner.scss';
import {Link} from 'react-router-dom';

const HomeBanner = () => (
  <section className="HomeBanner">
    <div className="bannerText">
      <h2>Online Free Market for Clothes</h2>
      <p>Its time to recycle</p>
      <button><Link to="/products">
            Shop Now
          </Link></button>
    </div>
  </section>
);

export default HomeBanner;

import React from "react";
import "./DashboardCategory.scss";
import { Link } from 'react-router-dom';

export default function DashboardCategory() {
  return (
    <section className="gallery">
      <div className="gallery-img-1">
        <img
          src="https://syncspider.com/wp-content/uploads/2019/07/1keagan-henman-xPJYL0l5Ii8-unsplash-e1562931127955.jpg"
          alt=""
          className="gallery-img "
        />
        <h1 className="image-heading"><Link to="/products/men clothing">
            Men Clothing
          </Link></h1>
      </div>
      <div className="gallery-img-2">
        <img
          src="https://www.pymnts.com/wp-content/uploads/2017/12/diamonds.jpg"
          alt=""
          className="gallery-img"
        />
        <h2 className="image-heading"><Link to="/products/jewelery">
          Jewelery
          </Link></h2>
      </div>
      <div className="gallery-img-3">
        <img
          src="https://gridaxis.in/products/demo/ecommerce/wp-content/uploads/2020/04/electronic-devices.jpg"
          alt=""
          className="gallery-img"
        />
        <h2 className="image-heading electronic"><Link to="/products/electronics">
              Electronics
          </Link></h2>
      </div>
      <div className="gallery-img-4">
        <img
          src="https://img.faballey.com/images/appimages/instagram_images/77f42682-d676-4d82-8b22-620d393790dc.jpg"
          alt=""
          className="gallery-img"
        />
        <h2 className="image-heading electronic"><Link to="/products/women clothing">
          Women's Clothing
          </Link></h2>
      </div>
    </section>
  );
}

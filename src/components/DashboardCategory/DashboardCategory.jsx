import React from "react";
import "./DashboardCategory.scss";

export default function DashboardCategory() {
  return (
    <section className="gallery">
      <div className="gallery-img-1">
        <img
          src="https://syncspider.com/wp-content/uploads/2019/07/1keagan-henman-xPJYL0l5Ii8-unsplash-e1562931127955.jpg"
          alt=""
          className="gallery-img "
        />
        <h1 className="image-heading">Men Clothing</h1>
      </div>
      <div className="gallery-img-2">
        <img
          src="https://www.pymnts.com/wp-content/uploads/2017/12/diamonds.jpg"
          alt=""
          className="gallery-img"
        />
        <h2 className="image-heading">Jewelery</h2>
      </div>
      <div className="gallery-img-3">
        <img
          src="https://gridaxis.in/products/demo/ecommerce/wp-content/uploads/2020/04/electronic-devices.jpg"
          alt=""
          className="gallery-img"
        />
        <h2 className="image-heading electronic">Electronics</h2>
      </div>
      <div className="gallery-img-4">
        <img
          src="https://img.faballey.com/images/appimages/instagram_images/77f42682-d676-4d82-8b22-620d393790dc.jpg"
          alt=""
          className="gallery-img"
        />
        <h2 className="image-heading electronic">Women's Clothing</h2>
      </div>
    </section>
  );
}

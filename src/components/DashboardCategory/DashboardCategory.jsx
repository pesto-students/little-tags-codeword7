import React from "react";
import "./DashboardCategory.scss";
import { Link } from 'react-router-dom';
import withTranslator from "../../hoc/withTranslation";

function DashboardCategory(props) {
  return (
    <section className="gallery">
      <div className="gallery-img-1">
        <img
          src="https://syncspider.com/wp-content/uploads/2019/07/1keagan-henman-xPJYL0l5Ii8-unsplash-e1562931127955.jpg"
          alt=""
          className="gallery-img "
        />
        <h1 className="image-heading"><Link className="link" to="/products/men clothing">
          {props.strings.MenClothing}
        </Link></h1>
      </div>
      <div className="gallery-img-2">
        <img
          src="https://www.pymnts.com/wp-content/uploads/2017/12/diamonds.jpg"
          alt=""
          className="gallery-img"
        />
        <h2 className="image-heading"><Link className="link" to="/products/jewelery">
          {props.strings.Jewelery}
        </Link></h2>
      </div>
      <div className="gallery-img-3">
        <img
          src="https://gridaxis.in/products/demo/ecommerce/wp-content/uploads/2020/04/electronic-devices.jpg"
          alt=""
          className="gallery-img"
        />
        <h2 className="image-heading electronic"><Link className="link" to="/products/electronics">
          {props.strings.Electronics}
        </Link></h2>
      </div>
      <div className="gallery-img-4">
        <img
          src="https://img.faballey.com/images/appimages/instagram_images/77f42682-d676-4d82-8b22-620d393790dc.jpg"
          alt=""
          className="gallery-img"
        />
        <h2 className="image-heading electronic"><Link className="link" to="/products/women clothing">
          {props.strings.WomenClothing}
        </Link></h2>
      </div>
    </section>
  );
}

DashboardCategory.defaultProps = {
  strings: {
    MenClothing: "Men Clothing",
    WomenClothing: "Women Clothing",
    Jewelery: "Jewelery",
    Electronics: "Electronics",
  }
}

export default withTranslator('DashboardCategory')(DashboardCategory);

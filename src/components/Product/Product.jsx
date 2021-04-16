import React from "react";
import PropTypes from "prop-types";
import "./Product.scss";

export default function Product(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt="" className="product-img" />
      <h2 className="product-heading">{props.title}</h2>
      <div className="product-price">Price: {props.price}</div>
      <button className="product-btn">Add to Cart</button>
    </div>
  );
}

Product.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number
};

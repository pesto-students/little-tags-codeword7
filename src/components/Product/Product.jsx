import React from "react";
import PropTypes from "prop-types";
import "./Product.scss";
import { addProduct } from '../../redux/Cart/cart.action';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";

export default function Product(product) {
  const { image, title, price, id } = product;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(
      addProduct(product)
    );
  };
  return (
    <div className="product-card">
      <img src={image} alt="" className="product-img" />
      <h2 className="product-heading" onClick={() => history.push(`/product/${id}`)}>{title}</h2>
      <div className="product-price">Price: {price}</div>
      <button className="product-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

Product.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number
};

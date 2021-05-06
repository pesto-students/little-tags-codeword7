import React from "react";
import PropTypes from "prop-types";
import "./Product.scss";
import { addProduct } from '../../redux/Cart/cart.action';
import { useHistory } from "react-router";
import priceFormatter from '../../Utility/priceFormatter';
import withTranslator from '../../hoc/withTranslation';
import { useSelector, useDispatch } from 'react-redux';
import { changeLoginModal } from '../../redux/User/user.actions'

const mapState = (state) => ({
  currentUser: state.user.currentUser
});

function Product(props) {
  const { image, title, price, id } = props.product;
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddToCart = (product) => {
    if (!product) return;
    if (!currentUser) dispatch(changeLoginModal(true));
    else {
      dispatch(addProduct(product));
      props.notify();
    }
  };

  return (
    <div>
      <div className="product-card">
        <img src={image[0]} alt="" className="product-img" />
        <h2 className="product-heading" onClick={() => history.push(`/product/${id}`)}>{title}</h2>
        <div className="product-price">{props.strings.Price}: {priceFormatter(price)}</div>
        <button className="product-btn" onClick={() => handleAddToCart(props.product)}>{props.strings.AddtoCart}</button>
      </div>
    </div>
  );
}

Product.defaultProps = {
  strings: {
    Price: "Price",
    AddtoCart: "Add to Bag"
  }
}

Product.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number
};

export default withTranslator('ProductComponent')(Product);

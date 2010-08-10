import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import { BiPlus, BiMinus } from "react-icons/bi";
import './ProductDesc.scss';
// eslint-disable-next-line
import { setProduct, fetchProductStart, setProducts } from '../../redux/Products/products.action';
import withTranslator from '../../hoc/withTranslation';
import priceFormatte from '../../Utility/priceFormatter';
import { addProduct, reduceCartProduct } from '../../redux/Cart/cart.action';

const mapState = state => ({
  product: state.productsData.product
})

function ProductDesc(props) {

  const dispatch = useDispatch();
  const { productID } = useParams();
  const { product } = useSelector(mapState);

  const { sliderImages, image, size, title, price, description } = product;
  // eslint-disable-next-line
  useEffect(() => {

    dispatch(
      fetchProductStart(productID)
    );

    return () => {
      setProducts([]);
      setProduct({})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [index, setIndex] = useState(0);

  const myRef = useRef()

  // useEffect(() => {
  //   myRef.current.children[index].className = "active";
  // }, [index])

  const addCartItem = (product) => {
    dispatch(
      addProduct(product)
    );
  }

  const reduceCartItem = (product) => {
    dispatch(
      reduceCartProduct(product)
    );
  }

  const handleSize = index => {
    console.log(index)
  }
  const handleTab = index => {
    setIndex(index)
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  if (product
    && Object.keys(product).length === 0 && product.constructor === Object) return null;

  return (
    <div className="app">
      <div className="details">
        <div className="big-img">
          <img src={image[index]} alt="" />
        </div>

        <div className="box">
          <div className="row">
            <h2>{title}</h2>
          </div>
          <div className="row">
            <span>{priceFormatte(price)}</span>
          </div>
          <div className="size-btn">
            {
              size.map((itemSize, index) => (
                <button key={index} onClick={() => handleSize(index)}>{itemSize}</button>
              ))
            }
          </div>

          <p>{description}</p>
          {/* <p>{item.content}</p> */}

          {/* <DetailsThumb images={item.src} tab={handleTab} myRef={myRef} /> */}
          <div className="thumb" ref={myRef}>
            {
              sliderImages.map((img, index) => (
                <img src={img} alt="" key={index}
                  onClick={() => handleTab(index)}
                />
              ))
            }
          </div>
          <div className="qty-wrapper">
            <div className="quantity">
              <div className="item-qty">
                <BiMinus />
                <div>1</div>
                <BiPlus />
              </div>
            </div>
          </div>
          <button className="cart">{props.strings.AddToCart}</button>
        </div>
      </div>
    </div>
  )
}

ProductDesc.defaultProps = {
  strings: {
    AddToCart: "Add to Cart"
  }
}

export default withTranslator('ProductDescComponent')(ProductDesc);

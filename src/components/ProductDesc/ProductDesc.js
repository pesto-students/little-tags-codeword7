import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import './ProductDesc.scss';
import { setProduct, fetchProductStart } from '../../redux/Products/products.action';

const mapState = state => ({
  product: state.productsData.product
})

function ProductDesc() {

  const dispatch = useDispatch();
  const { productID } = useParams();
  const { product } = useSelector(mapState);

  const { id, image, title, price, description } = product;

  useEffect(() => {
    dispatch(
      fetchProductStart(productID)
    );

    return () => {
      setProduct({})
    }
  }, []);

  const productArray = [
    {
      "_id": "1",
      "title": "Shoes",
      "src": [
        "https://picsum.photos/id/0/300/200",
        "https://picsum.photos/id/1/300/200",
        "https://picsum.photos/id/10/300/200",
        "https://picsum.photos/id/100/300/200",
      ],
      "description": "Description of product",
      "price": 23,
      "size": ["xl", "xs", "s"],
      "quantity": 10
    }
  ]
  const [products, setProduct] = useState(productArray)
  const [index, setIndex] = useState(0)

  const myRef = useRef()

  // useEffect(() => {
  //   myRef.current.children[index].className = "active";
  // }, [index])

  const handleTab = index => {
    setIndex(index)
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  return (
    <div className="app">
      <div className="details">
        <div className="big-img">
          <img src={image} alt="" />
        </div>

        <div className="box">
          <div className="row">
            <h2>{title}</h2>
            <span>₹{price}</span>
          </div>
          {/* <div className="colors">
                {
                  item.size.map((size, index) => (
                    <button key={index}>{size}</button>
                  ))
                }
              </div> */}

          <p>{description}</p>
          {/* <p>{item.content}</p> */}

          {/* <DetailsThumb images={item.src} tab={handleTab} myRef={myRef} /> */}
          {/* <div className="thumb" ref={myRef}>
                {
                  item.src.map((img, index) => (
                    <img src={img} alt="" key={index}
                      onClick={() => handleTab(index)}
                    />
                  ))
                }
              </div> */}
          <button className="cart">Add to cart</button>

        </div>
      </div>
    </div>
  )
}

export default ProductDesc;

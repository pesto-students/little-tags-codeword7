import React, { useState, useEffect, useRef } from 'react'
import './ProductDesc.scss'

function ProductDesc() {
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

  useEffect(() => {
    myRef.current.children[index].className = "active";
  }, [index])

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
      {
        products.map(item => (
          <div className="details" key={item._id}>
            <div className="big-img">
              <img src={item.src[index]} alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>₹{item.price}</span>
              </div>
              <div className="colors">
                {
                  item.size.map((size, index) => (
                    <button key={index}>{size}</button>
                  ))
                }
              </div>

              <p>{item.description}</p>
              {/* <p>{item.content}</p> */}

              {/* <DetailsThumb images={item.src} tab={handleTab} myRef={myRef} /> */}
              <div className="thumb" ref={myRef}>
                {
                  item.src.map((img, index) => (
                    <img src={img} alt="" key={index}
                      onClick={() => handleTab(index)}
                    />
                  ))
                }
              </div>
              <button className="cart">Add to cart</button>

            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ProductDesc

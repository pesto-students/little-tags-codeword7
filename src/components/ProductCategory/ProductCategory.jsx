import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../Product/Product";
import "./ProductCategory.scss";
const API_URL = "https://fakestoreapi.com/products";

export default function ProductCategory() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let productData = await axios(`${API_URL}`);
      // const resultData = await productData.json();
      // productData = productData.data.filter(
      //   (product) => product.category === "jewelery"
      // );
      setData(productData.data);
    }
    getData();
  }, []);
  return (
    <div>
      <h3 className="products-main-header">New Arrivals</h3>
      <div className="product-cards">
        {data.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import Product from "../Product/Product";
import "./ProductCategory.scss";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchProductsStart, setProducts } from "../../redux/Products/products.action";
import { useSelector } from "react-redux";
const SHIMMER_CARDS_LENGTH = 3;
const shimmerArray = new Array(SHIMMER_CARDS_LENGTH).fill(undefined);


const mapState = ({ productsData }) => ({
  products: productsData.products
})

export default function ProductCategory() {
  const dispatch = useDispatch();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }))
   
    return () => {
      console.log("Unmount Component");
      setProducts([]);
      console.log("After Unmount Component");
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterType]);

  if (!Array.isArray(products)) return null;

  return (
    <div className="product-category-wrapper">
      <h3 className="products-main-header">
        {filterType && filterType}
        {!filterType && "New Arrival"}
      </h3>
      <div className="product-cards">
        {products.length > 0 && products.map((product, pos) => {
          const configProduct = {
            ...product
          }
          return <Product
            key={pos}
            {...configProduct}
          />
        })}
        {products.length < 1 && shimmerArray.map((pos) => {
          return (
          <div class="card br">
            <div class="wrapper">
              <div className="shimmer-wrapper">
                <div class="profilePic animate din"></div>
                <div class="comment br animate w80"></div>
                <div class="comment br animate"></div>
              </div>
              
            </div>
            <button className="product-btn">Add to Cart</button>
          </div> )
        })}
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import Product from "../Product/Product";
import "./ProductCategory.scss";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchProductsStart } from "../../redux/Products/products.action";
import { useSelector } from "react-redux";


const mapState = ({ productsData }) => ({
  products: productsData.products
})

export default function ProductCategory() {
  const dispatch = useDispatch();
  const { filterType } = useParams();
  console.log("In Main Component", filterType);
  const { products } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterType]);

  if (!Array.isArray(products)) return null;
  if (products.length < 1) {
    return (
      <div>No Search Results</div>
    )
  }

  return (
    <div className="product-category-wrapper">
      <h3 className="products-main-header">
        {filterType && filterType}
        {!filterType && "New Arrival"}
      </h3>
      <div className="product-cards">
        {products.map((product, pos) => {
          const configProduct = {
            ...product
          }
          return <Product
            key={pos}
            {...configProduct}
          />
        })}
      </div>
    </div>
  );
}

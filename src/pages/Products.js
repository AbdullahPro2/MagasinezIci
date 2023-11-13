import React, { useContext } from "react";
import { ProductContext } from "../context/productContext";
import Loader from "../components/Loader";
import "../styles/products.css";
import Product from "../components/Product";
function Products() {
  const { products, isLoading } = useContext(ProductContext);

  if (isLoading) return <Loader />;
  if (products.length > 0)
    return (
      <>
        <h1 className="products-heading">Our Main Products</h1>
        <div className="products-container">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </>
    );
}

export default Products;

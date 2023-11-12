import React, { useContext } from "react";
import { ProductContext } from "../context/productContext";
import Loader from "../components/Loader";
import "../styles/products.css";
function Products() {
  const { products, isLoading } = useContext(ProductContext);

  if (isLoading) return <Loader />;
  if (products.length > 0) return <div>Products {products[0].title}</div>;
}

export default Products;

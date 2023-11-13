import React from "react";
import CartBtn from "./CartBtn";

function Product({ product }) {
  return (
    <div className="product">
      {product.rating.rate > 4.5 && <strong className="hot">Hot 🔥 </strong>}
      <div>
        <img
          src={product.image}
          alt={product.category + "image"}
          className="product-img"
        ></img>
      </div>
      <div className="product-detail-container">
        <h5 className="product-detail product-title">{product.title}</h5>
        <h3 className="product-detail ">€{product.price}</h3>

        <div className="product-rating">
          <p className="product-detail">Rating: {product.rating.rate}</p>
          <p className="product-detail">InStock: {product.rating.count}</p>
        </div>
        <CartBtn product={product} />
      </div>
    </div>
  );
}

export default Product;

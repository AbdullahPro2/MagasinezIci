import React from "react";
import CategoryProduct from "./CategoryProduct";

function CartItem({ product }) {
  return (
    <div className="category-prodcut">
      {product.rating.rate > 4.5 && <strong className="hot ">Hot 🔥 </strong>}
      <div>
        <img
          src={product.image}
          alt={product.category + "image"}
          className="category-prodcut-image"
        ></img>
      </div>
      <div className="category-prodcut-details">
        <h5 className="">{product.title}</h5>
        <h3 className=" ">€{product.price}</h3>
        <p>{product.description}</p>
        <div className="category-prodcut-rating">
          <p className="">Rating: {product.rating.rate}</p>
          <p className="">InStock: {product.rating.count}</p>
        </div>
        <strong>Quantity: {product.quantity}</strong>
      </div>
    </div>
  );
}

export default CartItem;

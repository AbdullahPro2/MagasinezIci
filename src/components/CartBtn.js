import React from "react";
import cart from "../imgs/cart.png";
function CartBtn({ id }) {
  return (
    <button
      className="add-cart category-prodcut-button"
      onClick={() => console.log(id)}
    >
      <img src={cart} alt="cart" className="add-cart-image" /> Add To Cart
    </button>
  );
}

export default CartBtn;

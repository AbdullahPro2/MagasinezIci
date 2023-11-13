import React, { useContext } from "react";
import cart from "../imgs/cart.png";
import { ProductContext } from "../context/productContext";
function CartBtn({ product }) {
  const { addToCart } = useContext(ProductContext);
  function handleAddToCart() {
    addToCart(product);
  }
  return (
    <button
      className="add-cart category-prodcut-button"
      onClick={handleAddToCart}
    >
      <img src={cart} alt="cart" className="add-cart-image" /> Add To Cart
    </button>
  );
}

export default CartBtn;

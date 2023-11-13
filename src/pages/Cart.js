import React, { useContext } from "react";
import { ProductContext } from "../context/productContext";
import CartItem from "../components/CartItem";
import Loader from "../components/Loader";

function Cart() {
  const { cart, isLoading } = useContext(ProductContext);
  const productMap = cart.reduce((map, product) => {
    const key = product.id;
    if (map.has(key)) {
      map.get(key).quantity += 1;
    } else {
      map.set(key, { ...product, quantity: 1 });
    }
    return map;
  }, new Map());

  const filterCart = Array.from(productMap.values());

  if (isLoading) return <Loader />;
  if (filterCart.length === 0) return <p className="emptyCart">Cart Empty !</p>;
  if (filterCart.length > 0) {
    return (
      <div className="cart-container">
        {filterCart.map((el) => (
          <CartItem product={el} key={el.id} />
        ))}
      </div>
    );
  }
}

export default Cart;

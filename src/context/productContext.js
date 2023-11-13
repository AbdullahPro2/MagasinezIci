import { createContext, useEffect, useReducer } from "react";
const ProductContext = createContext();

const initialState = {
  products: [],
  isLoading: false,
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "dataReceived":
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case "addToCart":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "removeFromCart":
      return {
        ...state,
        cart: state.cart.filter(
          (cartProduct) => cartProduct.id !== action.payload
        ),
      };
    case "clearCart":
      return {
        ...state,
        cart: [],
      };
    case "error":
      return {
        ...state,
        isLoading: true,
      };
    default: {
      throw new Error("Unknown action type");
    }
  }
}

function ProductProvider({ children }) {
  const [{ products, isLoading, cart }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(() => {
    async function fetchProdcuts() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`https://fakestoreapi.com/products`);
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({
          type: "error",
          payload: "Error occured while loading products",
        });
      }
    }
    fetchProdcuts();
  }, []);

  function addToCart(product) {
    dispatch({ type: "addToCart", payload: product });
  }
  function removeFromCart(productId) {
    dispatch({ type: "removeFromCart", payload: productId });
  }
  function clearCart() {
    dispatch({ type: "clearCart" });
  }
  return (
    <ProductContext.Provider
      value={{
        products,
        isLoading,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
export { ProductProvider, ProductContext };

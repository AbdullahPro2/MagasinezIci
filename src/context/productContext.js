import { createContext, useEffect, useReducer } from "react";
const ProductContext = createContext();

const initialState = {
  products: [],
  isLoading: false,
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
  const [{ products, isLoading }, dispatch] = useReducer(reducer, initialState);
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

  return (
    <ProductContext.Provider value={{ products, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
}
export { ProductProvider, ProductContext };

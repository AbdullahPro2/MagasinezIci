import { Route, Routes } from "react-router-dom";
import "./styles/app.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>{" "}
      <Footer />
    </>
  );
}

export default App;

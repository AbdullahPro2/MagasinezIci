import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../imgs/Logo.png";

function Navbar() {
  return (
    <header>
      <nav>
        <img src={Logo} alt="logo" style={{ width: "5%" }} />
        <ul>
          <li>
            {" "}
            <NavLink to="/">HomePage</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/category/men">Men's</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/category/women">Women's</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/category/jewelery">Jwelery</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/category/electronics">Electronics</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

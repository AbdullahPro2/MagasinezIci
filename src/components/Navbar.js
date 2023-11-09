import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../imgs/Logo.png";
import "../styles/navbar.css";
import cross from "../imgs/CrossIcon.png";
import menu from "../imgs/MenuIcon.png";
import cart from "../imgs/cart.png";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header>
      <nav className="nav">
        <img src={Logo} alt="logo" className="logo" />
        <ul className={`nav-list ${isActive ? "nav-active" : ""}`}>
          <NavLink to="/" className="navlink">
            {" "}
            <li> Home</li>
          </NavLink>{" "}
          <NavLink to="/products" className="navlink">
            {" "}
            <li>Products</li>
          </NavLink>{" "}
          <NavLink to="/category/men" className="navlink">
            <li> Men's</li>
          </NavLink>{" "}
          <NavLink to="/category/women" className="navlink">
            <li> Women's </li>
          </NavLink>{" "}
          <NavLink to="/category/jewelery" className="navlink">
            <li>Jwelery</li>
          </NavLink>{" "}
          <NavLink to="/category/electronics" className="navlink">
            <li> Electronics</li>
          </NavLink>{" "}
          <NavLink to="/cart" className="navlink">
            <li>
              <img src={cart} alt="Cart" className="cart" />{" "}
            </li>
          </NavLink>
        </ul>
        <div className="navbar-icons">
          {!isActive && (
            <img
              src={menu}
              alt="navbar Icons"
              className="nav-icon"
              onClick={() => setIsActive(!isActive)}
            />
          )}
          {isActive && (
            <img
              src={cross}
              alt="navbar Icons"
              className="nav-icon"
              onClick={() => setIsActive(!isActive)}
            />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

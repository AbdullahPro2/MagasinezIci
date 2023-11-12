import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../imgs/Logo.png";
import "../styles/navbar.css";
import cross from "../imgs/CrossIcon.png";
import menu from "../imgs/MenuIcon.png";
import cart from "../imgs/cart.png";
import useOnScroll from "../hooks/useOnScroll";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const navbarRef = useRef(null);
  const visible = useOnScroll(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    },
    navbarRef
  );
  console.log(visible);
  function handleClick() {
    setIsActive(!isActive);
  }
  useEffect(() => {
    if (!visible) {
      setIsActive(false);
    }
  }, [visible]);

  return (
    <header>
      <nav className="nav">
        <img src={Logo} alt="logo" className="logo" />
        <ul
          className={`nav-list ${isActive ? "nav-active" : ""}`}
          ref={navbarRef}
        >
          <NavLink
            to="/"
            className="navlink"
            onClick={() => setIsActive(false)}
          >
            {" "}
            <li> Home</li>
          </NavLink>{" "}
          <NavLink
            to="/products"
            className="navlink"
            onClick={() => setIsActive(false)}
          >
            {" "}
            <li>Products</li>
          </NavLink>{" "}
          <NavLink
            to="/category/men"
            className="navlink"
            onClick={() => setIsActive(false)}
          >
            <li> Men's</li>
          </NavLink>{" "}
          <NavLink
            to="/category/women"
            className="navlink"
            onClick={() => setIsActive(false)}
          >
            <li> Women's </li>
          </NavLink>{" "}
          <NavLink
            to="/category/jewelery"
            className="navlink"
            onClick={() => setIsActive(false)}
          >
            <li>Jwelery</li>
          </NavLink>{" "}
          <NavLink
            to="/category/electronics"
            className="navlink"
            onClick={() => setIsActive(false)}
          >
            <li> Electronics</li>
          </NavLink>{" "}
          <NavLink
            to="/cart"
            className="navlink"
            onClick={() => setIsActive(false)}
          >
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
              onClick={handleClick}
            />
          )}
          {isActive && (
            <img
              src={cross}
              alt="navbar Icons"
              className="nav-icon cross"
              onClick={handleClick}
            />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

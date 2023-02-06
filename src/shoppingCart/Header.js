import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ProductContext from "./ProductContext";

function Header() {
  const { cart } = useContext(ProductContext);
  return (
    <nav>
      <h1><NavLink to="/">Ecommerce Website</NavLink></h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/cart">
            Cart <span className="cartCount">{cart.length}</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

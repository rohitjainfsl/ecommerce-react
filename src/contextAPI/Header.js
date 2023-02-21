import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { cartContext } from "./cartContext";

function Header() {
  const { cart } = useContext(cartContext);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 200) setSticky(true);
      else setSticky(false);
    };
  }, []);
  return (
    <>
      <header>
        <h1>
          <NavLink to="/">Ecommerce</NavLink>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                Cart
                <span className="product-count">{cart.length}</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <header className={sticky ? "visible sticky" : "sticky"}>
        <h1>
          <NavLink to="/">Ecommerce</NavLink>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                Cart
                <span className="product-count">{cart.length}</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;

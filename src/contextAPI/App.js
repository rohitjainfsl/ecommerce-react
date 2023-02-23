import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import ProductDetail from "./ProductDetail";
import Home from "./Home";
import Cart from "./Cart";
import "./ecommerce.css";
import { cartContext } from "./cartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState(
    localStorage.getItem("cartItems") === null
      ? []
      : JSON.parse(localStorage.getItem("cartItems"))
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  function addToCart(e, productParams) {
    e.preventDefault();
    setCart([...cart, productParams]);
  }

  return (
    <BrowserRouter>
      <cartContext.Provider value={{ cart, setCart, addToCart }}>
        <div className="ecommerce">
          <Header />
          <section className="main-site">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/product/:id" element={<ProductDetail />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </section>
        </div>
      </cartContext.Provider>
    </BrowserRouter>
  );
}

export default App;

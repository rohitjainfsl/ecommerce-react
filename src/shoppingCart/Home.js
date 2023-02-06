import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import Header from "./Header";
import ProductListing from "./ProductListing";
import ProductContext from "./ProductContext";
import "./shoppingCart.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    sessionStorage.getItem("cartItem") === null
      ? []
      : JSON.parse(sessionStorage.getItem("cartItem"))
  );

  useEffect(() => {
    function getRandomData() {
      axios.get("https://dummyjson.com/products").then((response) => {
        // console.log(response.data.products);
        setProducts(response.data.products);
      });
    }
    getRandomData();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("cartItem", JSON.stringify(cart));
  }, [cart]);

  function addToCart(e, id) {
    e.preventDefault();
    setCart([...cart, id]);
  }

  return (
    <>
      <ProductContext.Provider value={{ products, setProducts, addToCart, cart }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ProductListing />}></Route>
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
      <div>
        {/* <header>
        <h1>Shopping Cart</h1>
        <a className="cart">
          Cart <span className="cartCount">{cart.length}</span>
        </a>
      </header> */}
      </div>
    </>
  );
}

export default Home;
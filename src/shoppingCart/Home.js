import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import Header from "./Header";
import ProductListing from "./ProductListing";
import ProductContext from "./ProductContext";
import "./shoppingCart.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    sessionStorage.getItem("cartItem") === null
      ? []
      : JSON.parse(sessionStorage.getItem("cartItem"))
  );

  useEffect(() => {
    function getRandomData() {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        // console.log(response.data);
        setProducts(response.data);
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
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
      
    </>
  );
}

export default Home;

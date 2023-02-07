import React, { useState, useEffect, useContext } from "react";
import ProductContext from "./ProductContext";

function Cart() {
  const { products } = useContext(ProductContext);
  const [cart, setCart] = useState(null);

  function getItemsFromProductsToCart() {
    const cartArr = JSON.parse(sessionStorage.getItem("cartItem"));
    console.log(cartArr);
    setCart(
      cartArr.map((arr) => {
        return products.filter((product) => product.id === arr);
      })
    );
  }

  useEffect(() => {
    sessionStorage.getItem("cartItem") !== null
      ? getItemsFromProductsToCart()
      : setCart([]);
  }, []);

  console.log(cart);

  return (
    <div className="cart">
      <div className="items">
        {cart?.length > 0 &&
          cart.map((item) => {
            return (
              <div className="item" key={item[0].id} id={item[0].id}>
                <div className="left">
                  <img src={item[0].image}></img>
                </div>
                <div className="center">
                  <h5>{item[0].title}</h5>
                  <p>Quantity: <span>1</span></p>
                </div>
                <div className="right">
                  <a href="">Update Cart</a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Cart;

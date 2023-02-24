import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "./cartContext";

function Cart() {
  const { cart, setCart } = useContext(cartContext);
  const [init, setInit] = useState(1)

  useEffect(() => {
    if (localStorage.getItem("cartItems") !== null) {
      localStorage.setItem("cartItems", JSON.stringify(cart));
    }
  }, [cart]);

  function handleDelete(e, itemId) {
    e.preventDefault();
    setCart(
      cart.filter((product) => {
        return product.id !== itemId;
      })
    );
  }

  function UpdateQuantity(props){
    return (
      <input type='number' value='1'  />
    )
  }

  console.log(cart);
  return (
    <div className="cart">
      <div className="items">
        {cart &&
          cart.map((item) => {
            return (
              <div className="cartItem" key={item.id}>
                <div className="left">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="right">
                  <p>{item.title}</p>
                  <p>
                    INR {Math.floor(item.price * 85)}
                    <a href="" onClick={(e) => handleDelete(e, item.id)}>
                      Delete
                    </a>
                  </p>
                  <p><UpdateQuantity initialQuantity={init} /></p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Cart;

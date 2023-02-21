import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "./cartContext";

function Cart() {
  const [productsToShow, setProductsToShow] = useState(null);
  const { cart } = useContext(cartContext);

  useEffect(() => {
    if (localStorage.getItem("cartItems") !== null) {
      const temp = JSON.parse(localStorage.getItem("cartItems"));
      setProductsToShow(temp.map((item) => item));
    }
  }, []);
  console.log(productsToShow);

  return (
    <div className="cart">
      <h1>Cart</h1>
      {productsToShow !== null ? (
        <div className="cartItems">
          {productsToShow.map((product) => (
            <div className="cartItem">
              <img src={product.image}></img>
              <p>
                <span>
                  {product.title.length > 50
                    ? product.title.slice(0, 50) + "..."
                    : product.title}
                </span>
                <span>INR {Math.round(product.price * 85)}</span>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Your Cart is empty. Shop something</p>
      )}
    </div>
  );
}

export default Cart;

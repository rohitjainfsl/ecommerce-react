import React, { useContext, useState } from "react";
import { cartContext } from "./cartContext";

function Cart() {
  const { cart, setCart } = useContext(cartContext);
  const [quantity, setQuantity] = useState(1);
  const [quantities, setQuantities] = useState([]);

  function deleteFromCart(e, productId) {
    e.preventDefault();
    setCart(
      cart.filter((item) => {
        return item.id !== productId;
      })
    );
  }

  function handleQuantityChange(productId) {
    setQuantities(
      quantities[productId?.quantity] !== null
        ? [
            ...quantities,
            { quantity: quantities[productId.quantity] + 1, id: productId },
          ]
        : [...quantities, { quantity: 1, id: productId }]
    );
  }
  console.log(cart);

  let initialTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    initialTotal += Math.round(cart[i].price * 85);
  }
  // console.log(initialTotal)

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart !== null ? (
        <div className="cartItems">
          {cart.map((product) => (
            <div className="cartItem" key={product.id}>
              <img src={product.image}></img>
              <div>
                <span>
                  {product.title.length > 50
                    ? product.title.slice(0, 50) + "..."
                    : product.title}
                </span>
                <span>INR {Math.round(product.price * 85) * quantity}</span>
                <a href="" onClick={(e) => deleteFromCart(e, product.id)}>
                  Delete
                </a>
                <p>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={quantity}
                    onChange={() => handleQuantityChange(product.id)}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your Cart is empty. Shop something</p>
      )}

      <div className="cartTotal">
        <p>
          <strong>Cart total: </strong> <span>{initialTotal}</span>
        </p>
      </div>
    </div>
  );
}

export default Cart;

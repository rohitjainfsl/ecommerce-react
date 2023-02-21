import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { cartContext } from "./cartContext";
import { NavLink } from "react-router-dom";

function Products() {
  const { cart, addToCart } = useContext(cartContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("https://fakestoreapi.com/products");
      setProducts(result.data);
    }
    fetchData();
  }, []);

  console.log(cart)

  return (
    <>
      <div className="products">
        <h1>Products</h1>
        <div className="product-wrapper">
          {products.map((product) => {
            return (
              <div className="product" key={product.id}>
                <NavLink className="product-img" to={`/product/${product.id}`}>
                  <img src={product.image} />
                </NavLink>
                <div className="product-content">
                  <h4>
                    <NavLink to={`/product/${product.id}`}>
                      {product.title.length > 50
                        ? product.title.slice(0, 50) + "..."
                        : product.title}
                    </NavLink>
                  </h4>
                  {cart.find(item => item.id === product.id) === undefined ? (
                    <a
                      href=""
                      className="addToCart"
                      onClick={(e) =>
                        addToCart(e, {
                          id: product.id,
                          title: product.title,
                          price: product.price,
                          image: product.image
                      })
                      }
                    >
                      Add To Cart
                    </a>
                  ) : (
                    <p className="addToCart">Added to Cart</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;

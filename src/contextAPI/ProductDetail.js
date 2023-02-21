import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { cartContext } from "./cartContext";

function ProductDetail() {
  const { id } = useParams();
  const { cart, addToCart } = useContext(cartContext);
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("https://fakestoreapi.com/products/" + id);
      console.log(result.data);
      setSingleProduct(result.data);
    }

    fetchData();
  }, []);
  return (
    <>
      <div className="single-product">
        <div className="left">
          <img src={singleProduct.image} alt={singleProduct.id}></img>
        </div>
        <div className="right">
          <h2>{singleProduct.title}</h2>
          <p className="category">{singleProduct.category}</p>
          <p className="price">INR {Math.round(singleProduct.price * 85)}</p>
          <p className="desc">{singleProduct.description}</p>
          {cart.includes(singleProduct.id) === false ? (
            <Link
              to=""
              className="addToCart"
              onClick={(e) =>
                addToCart(e, {
                  id: singleProduct.id,
                  title: singleProduct.title,
                  price: singleProduct.price,
                  image: singleProduct.image
              })
              }
            >
              Add To Cart
            </Link>
          ) : (
            <p className="addToCart">Added to Cart</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductDetail;

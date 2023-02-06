import React, {useContext} from "react";
import ProductContext from "./ProductContext";

function ProductListing() {
  const { products, addToCart } = useContext(ProductContext);
  return (
    <div className="products">
      {products.map((product, index) => {
        return (
          <div className="product" key={index}>
            <img src={product.image}></img>
            <a href="" onClick={(e) => addToCart(e, index)}>
              Add To Cart
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListing;

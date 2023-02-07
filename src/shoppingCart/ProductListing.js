import React, {useContext} from "react";
import ProductContext from "./ProductContext";

function ProductListing() {
  const { products, addToCart } = useContext(ProductContext);
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <div className="product" key={product.id} id={product.id}>
            <img src={product.image}></img>
            <a href="" onClick={(e) => addToCart(e, product.id)}>
              Add To Cart
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default ProductListing;

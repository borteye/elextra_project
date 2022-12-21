import React, { useState } from "react";
import FeaturedProduct from "./FeaturedProduct";
import loading04 from "../../Assets/loading04.gif";
import Mac from "../../Assets/Mac.png";
import bag1 from "../../Assets/bag1.svg";
import bag2 from "../../Assets/bag2.svg";
import bag3 from "../../Assets/bag3.svg";

import "./Featured.css";

function Featured({ loading, error, product, addToCart }) {
  const [showBtn, setShowBtn] = useState(false);

  return (
    <>
      <div className="featured">
        <div className="container">
          <div className="content">
            <div className="title">FEATURED PRODUCTS</div>
            <div className="product_container">
              <FeaturedProduct product={product} addToCart={addToCart} />
            </div>

            {/* <FeaturedProduct product={product} addToCart={addToCart} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;

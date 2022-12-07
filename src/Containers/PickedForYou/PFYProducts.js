import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import buy from "../../svgIcons/buy-svgrepo-com.svg";

const PFYProducts = ({ product, addToCart }) => {
  const dispatch = useDispatch();

  return (
    <>
      {product &&
        product.map((item) => {
          return (
            <>
              <div className="card" key={item.id}>
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <div className="details">
                  <div className="product_name">{item.name}</div>
                  <div className="product_category">{item.category}</div>
                  <div className="shipping_price">
                    ${item.shipping_price}Shipping
                  </div>
                  <div className="about_product">{item.about}</div>
                  <div className="price_buy">
                    <div className="product_price">
                      <strong>
                        ${item.price}
                        <span className="decimal">.{item.price_decimal}</span>
                      </strong>
                    </div>
                    <button onClick={() => addToCart(item, item.id)}>
                      <img src={buy} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default PFYProducts;

import React, { useState, useEffect } from "react";
import "./YourBag.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Mac from "../../Assets/Mac.png";
// import Nintendo from "../../Assets/Nintendo.png";
// import iPhone from "../../Assets/iphone.png";
import { IoAdd } from "react-icons/io5";
import { BiMinus } from "react-icons/bi";

function YourBag() {
  const navigate = useNavigate();

  const continue_shopping = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const check_out = (e) => {
    e.preventDefault();
    navigate("/check-out");
  };

  return (
    <>
      <div className="your_bag">
        <div className="container">
          <div className="content">
            <div className="title">YOUR BAG</div>
            <div className="section_one">
              <div className="continue_shopping">
                <button
                  className="cont_shopping_btn"
                  onClick={continue_shopping}
                >
                  CONTINUE SHOPPING
                </button>
              </div>
              <div className="bag_wishlist">
                <div className="bag">Shopping Bag (0)</div>
                <div className="wishlist">Your Wishlist (0)</div>
              </div>
              <div className="check_out">
                <button className="check_out_btn" onClick={check_out}>
                  CHECKOUT NOW
                </button>
              </div>
            </div>
            <div className="section_two">
              <div className="subSection_one">
                <div className="shopping_bag">
                  <div className="one">
                    <div className="image">
                      <img src={Mac} alt="" />
                    </div>
                    <div className="details">
                      <div className="about_product">
                        <p>
                          <strong>Product:</strong> name
                        </p>
                        <p>
                          <strong>ID:</strong> 0.25
                        </p>
                      </div>
                      <div className="counter_price_bg">
                        <div className="counter">
                          <IoAdd className="add" />
                          <p className="count">3</p>
                          <BiMinus className="minus" />
                        </div>
                        <div className="price">$149</div>
                      </div>
                    </div>
                  </div>
                  <div className="two">
                    <div className="counter_price_small">
                      <div className="counter">
                        <IoAdd className="add" />
                        <p className="count">1</p>
                        <BiMinus className="minus" />
                      </div>
                      <div className="price">$79</div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>

              <div className="subSection_two">
                <div className="order_summary">
                  <div className="title">ORDER SUMMARY</div>
                  <div className="subtotal">
                    <p>Subtotal</p>
                    <p>$4875</p>
                  </div>
                  <div className="esti_shipping">
                    <p>Estimated Shipping</p>
                    <p>$5.9</p>
                  </div>
                  <div className="shipping_discount">
                    <p>Shipping Discount</p>
                    <p>$5.9</p>
                  </div>
                  <div className="total">
                    <p>Total</p>
                    <p>$80.00</p>
                  </div>
                  <button className="check_out_btn" onClick={check_out}>
                    CHECKOUT NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YourBag;

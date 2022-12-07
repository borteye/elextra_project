import React, { useState } from "react";
import "./Payment.css";
import { useNavigate } from "react-router-dom";
import MacBook from "../../Assets/Mac.png";

function Payment() {
  const navigate = useNavigate();

  return (
    <>
      <div className="payment">
        <div className="container">
          <div className="content">
            <div className="section_one">
              <div className="title">2. Payment</div>
              <div className="shipping_add">
                <div className="sec_one">
                  <div className="one">1</div>
                  <div className="two">
                    <p>SHIPPING ADDRESS</p>
                    <div className="address">
                      Beady Cooper, New Civil Colony, Soft Lake City, Utah
                      United States, 2971 Avenue
                    </div>
                  </div>
                </div>
                <div className="sec_two">
                  <button>CHANGE</button>
                </div>
              </div>
              <div className="payment_head">
                <span>2</span> PAYMENT METHOD
              </div>
              <div className="payment_methods">
                <ul>
                  <li>
                    <div className="creditDebitOverall">
                      <input type="radio" className="radioInput" />
                      <div className="debit_Credit">
                        <div className="payment_description">
                          <div className="payment_logo"></div>
                          <div className="payment_name">Credit Card</div>
                        </div>
                        <div className="payment_info">
                          <div className="card_number">
                            <label>Enter Card Number *</label>
                            <input type="text" />
                          </div>
                          <div className="validD_Cvv_Btn">
                            <div className="valid_date">
                              <label>Valid Date</label>
                              <div className="day_month">
                                <select>
                                  <option value="">MM</option>
                                  <option value="">01</option>
                                  <option value="">02</option>
                                  <option value="">03</option>
                                </select>
                                <select>
                                  <option value="">YYYY</option>
                                  <option value="">2001</option>
                                  <option value="">2001</option>
                                  <option value="">2001</option>
                                  <option value="">2001</option>
                                </select>
                              </div>
                            </div>
                            <div className="cvv">
                              <label>CVV *</label>
                              <input type="text" />
                            </div>
                            <div className="payBtn">
                              <label></label>
                              <button>Pay $1700</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <p className="legit">
                    Your card details would be securely saved for faster
                    payments. Your CVV will not be saved
                  </p>
                  <li>
                    <div className="paypalOverall">
                      <input type="radio" className="radioInput" />
                      <div className="paypal">
                        <div className="payment_description">
                          <div className="payment_logo"></div>
                          <div className="payment_name">PayPal</div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="acceptT_C">
                  <span>
                    <input type="checkbox" />
                    <p className="t&c">
                      By clicking on the button, you agree to the Terms and
                      Conditions
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="section_two">
              <div className="order_section">
                <div className="head">Your Order</div>
                <ul>
                  <hr />
                  <li>
                    <div className="sec_one">
                      <div className="product_image">
                        <img src={MacBook} alt="" />
                      </div>
                    </div>
                    <div className="sec_two">
                      <div className="product_name">MACBOOK AIR 2022</div>
                      <div className="product_details">Size XL</div>
                      <div className="product_price">
                        <p className="price">$200 </p>
                        <div className="of">x</div>
                        <p className="qantity">20</p>
                      </div>
                    </div>
                  </li>
                  <hr />
                </ul>
                <div className="delivery">
                  <p className="dLabel">Delivery</p>
                  <p className="dDetails">
                    <span className="delivery_price">$20</span>
                    <span className="delivery_type">Express</span>
                  </p>
                </div>
                <div className="discount">
                  <p className="disLabel">Discount</p>
                  <p className="discount_price">-$10</p>
                </div>
                <div className="total">
                  <p className="totLabel">Total</p>
                  <p className="tot_price">$177,00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Payment;

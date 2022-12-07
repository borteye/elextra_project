import React, { useState } from "react";
import "./CheckOut.css";
import cart from "../../svgIcons/cart-svgrepo-com.svg";
import Mac from "../../Assets/Mac.png";
import iPhone from "../../Assets/iphone.png";
import visa from "../../Assets/visa.png";
import mastercard from "../../svgIcons/mastercard-svgrepo-com.svg";
import american_exp from "../../svgIcons/american-express-svgrepo-com.svg";
import paypal from "../../svgIcons/paypal-svgrepo-com.svg";
import { IoClose } from "react-icons/io5";
import { AiFillLock } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ReturnPolicy from "../../Components/ReturnPolicy/ReturnPolicy";

function CheckOut() {
  const navigate = useNavigate();

  const [showSumDetails, setShowSumDetails] = useState(false);
  const [returnPolicy, setReturnPolicy] = useState(false);

  const viewSumDetails = () => {
    setShowSumDetails(true);
  };

  const hideSumDetails = () => {
    setShowSumDetails(false);
  };

  const view_bag = (e) => {
    e.preventDefault();
    navigate("/yourBag");
  };

  const payment = (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  const returnPoli = () => {
    setReturnPolicy(true);
  };

  return (
    <>
      {returnPolicy ? (
        <ReturnPolicy setReturnPolicy={setReturnPolicy} />
      ) : (
        <></>
      )}
      <div className="check_out">
        <div className="container">
          <div className="content">
            <div className="items_midScreen">
              <div className="midScreen">
                <div className="icon_text" onClick={viewSumDetails}>
                  <img src={cart} alt="" />
                  <p>Order Summary: 1 items</p>
                </div>
                <div className="price_close">
                  {showSumDetails ? (
                    <IoClose className="closeIcon" onClick={hideSumDetails} />
                  ) : (
                    <p className="price">$85.99</p>
                  )}
                </div>
              </div>
              <div
                className={
                  showSumDetails ? "mid_overall" : "mid_overall_hidden"
                }
              >
                <div className="midScreen_details">
                  <div className="midScreen_image">
                    <img src={iPhone} alt="" />
                  </div>
                  <div className="mid_details">
                    <div className="product_title">
                      <p> MacBook Air 2017</p>
                    </div>
                    <div className="product_id">
                      <p>
                        {" "}
                        <b>ID</b>: 819924003
                      </p>
                    </div>
                    <div className="quantity_price">
                      <p>
                        {" "}
                        <span className="quantity">1</span>{" "}
                        <span className="at"> @ </span>
                        <span className="price">1099.00</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mid_summary">
                  <div className="summary_details">
                    <div className="subtotal">
                      <p>SUBTOTAL</p>
                      <p>$79.99</p>
                    </div>
                    <div className="delivery_type">
                      <p>STANDARD DELIVERY</p>
                      <p>$6.00</p>
                    </div>
                    <div className="esti_tax">
                      <p>ESTIMATED TAX</p>
                      <p>$0.00</p>
                    </div>
                    <hr />
                    <div className="esti_total">
                      <p>ESTIMATED TOTAL</p>
                      <p>$85.99</p>
                    </div>
                  </div>
                </div>
                <div className="viewBag_close">
                  <div className="viewBag">
                    <p onClick={view_bag}> View Bag</p>
                  </div>
                  <div className="close">
                    <button onClick={hideSumDetails}>Close</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="title">Checkout</div>
            <p className="preamble_text">
              Please enter your email address and select from available
              shipping, delivery and payment options.
            </p>
            <div className="preamble">
              <div className="email">
                <input type="text" placeholder="Email*" />
                <p>We will send order confrimation to this address</p>
              </div>
              <div className="membership">
                Members get <b>50% discount free shipping + rewards </b> on this
                purchase <span className="underline">Join For Free </span> or{" "}
                <span className="underline">Log In</span>
              </div>
            </div>
            <div className="details">
              <div className="section_one">
                <div className="shipping_delivery">
                  <div className="title">1. Shipping & Delivery</div>
                  <div className="shipping">
                    <form>
                      <div className="name">
                        <input
                          type="text"
                          className="f_name"
                          placeholder="First Name*"
                        />
                        <input
                          type="text"
                          className="l_name"
                          placeholder="Last Name*"
                        />
                      </div>
                      <div className="address">
                        <input
                          type="text"
                          className="address_one"
                          placeholder="Address 1*"
                        />
                        <input
                          type="text"
                          className="address_two"
                          placeholder="Address 1 (optional)"
                        />
                      </div>
                      <div className="residence">
                        <div className="section_one">
                          <input
                            type="text"
                            className="city"
                            placeholder="City*"
                          />
                          <div className="state">
                            <fieldset>
                              <legend>state*</legend>
                              <select className="states">
                                <option value="">Select...</option>
                                <option value="">jk</option>
                                <option value="">l</option>
                                <option value="">jk</option>
                                <option value="">l</option>
                                <option value="">jk</option>
                                <option value="">l</option>
                                <option value="">jk</option>
                                <option value="">l</option>
                              </select>
                            </fieldset>
                          </div>
                        </div>
                        <div className="section_two">
                          <input
                            type="text"
                            className="zip_code"
                            placeholder="ZIP Code*"
                          />
                        </div>
                      </div>
                      <div className="phone_number">
                        <div className="section_one">
                          <input
                            type="text"
                            className="phone"
                            placeholder="Phone Number*"
                          />
                        </div>
                        <p>Example: (999) 999-9999</p>
                      </div>
                    </form>
                  </div>

                  <div className="delivery">
                    <div className="title">Select Delivery Option</div>

                    <p>
                      Due to Hurricane lan, deliveries to some regions in
                      Florida will be delayed.
                    </p>
                    <hr />
                    <ul>
                      <li>
                        <div className="free_level">
                          <input type="radio" />
                          <p>
                            Become a Greater Rewards member for 50% discount
                            shipping always
                          </p>
                        </div>
                        <div className="level_price">
                          <b>Free</b>
                        </div>
                      </li>
                      <li>
                        <div className="standard_level">
                          <input type="radio" />
                          <p> Standard Delivery (Est. arrival Oct 07-Oct 11)</p>
                        </div>
                        <div className="level_price">$6.00</div>
                      </li>
                      <li>
                        <div className="expedited_level">
                          <input type="radio" />
                          <p>Expedited Delivery (Est. arrival Oct 05-Oct 06)</p>
                        </div>
                        <div className="level_price">$12.00</div>
                      </li>
                      <li>
                        <div className="rush_level">
                          <input type="radio" />
                          <p> Rush Delivery (Est. arrival Oct 04-Oct-05)</p>
                        </div>
                        <div className="level_price">$19.00</div>
                      </li>
                    </ul>
                  </div>
                  <div className="continue_to_payment">
                    <button onClick={payment}>CONTINUE TO PAYMENT</button>
                  </div>
                  <div className="payments">
                    <p>2. Payment</p>
                    <div className="lock">
                      <AiFillLock />
                    </div>
                  </div>
                  <div className="review_order">
                    <p>3. Review Order</p>
                  </div>
                </div>
              </div>
              <div className="section_two">
                <div className="summary_section">
                  <div className="title">Order Summary</div>
                  <div className="overall_sum">
                    <div className="summary_details">
                      <div className="subtotal">
                        <p>SUBTOTAL</p>
                        <p>$79.99</p>
                      </div>
                      <div className="delivery_type">
                        <p>STANDARD DELIVERY</p>
                        <p>$6.00</p>
                      </div>
                      <div className="esti_tax">
                        <p>ESTIMATED TAX</p>
                        <p>$0.00</p>
                      </div>
                      <hr />
                      <div className="esti_total">
                        <p>ESTIMATED TOTAL</p>
                        <p>$85.99</p>
                      </div>
                    </div>
                    <div className="payment_methods">
                      <p>Accepted Payment Methods</p>
                      <div className="method_types">
                        <div className="paypal">
                          <img src={paypal} alt="" />
                        </div>
                        <div className="visa">
                          <img src={visa} alt="" />
                        </div>
                        <div className="mastercard">
                          <img src={mastercard} alt="" />
                        </div>
                        <div className="american_exp">
                          <img src={american_exp} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="return_policy">
                      <p onClick={returnPoli}>Return Policy</p>
                    </div>
                  </div>
                </div>
                <div className="product_section">
                  <p className="header">1 ITEM</p>
                  <hr />
                  <div className="product_details">
                    <div className="image">
                      <img src={Mac} alt="" />
                    </div>
                    <div className="details">
                      <div className="product_title">
                        <p> MacBook Air 2017</p>
                      </div>
                      <div className="product_id">
                        <p>
                          {" "}
                          <b>ID</b>: 819924003
                        </p>
                      </div>
                      <div className="quantity_price">
                        <p>
                          {" "}
                          <span className="quantity">1</span>{" "}
                          <span className="at"> @ </span>
                          <span className="price">1099.00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;

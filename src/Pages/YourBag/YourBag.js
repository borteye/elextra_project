import React from "react";
import "./YourBag.css";
import { IoAdd } from "react-icons/io5";
import { BiMinus } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import Mac from "../../Assets/Mac.png";
import { useNavigate, Link } from "react-router-dom";

function YourBag({
  cartProduct,
  addToCart,
  reduceQuantity,
  removeItem,
  totalPrice,
}) {
  const navigate = useNavigate();

  const continueShopping = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const checkout = (e) => {
    e.preventDefault();
    navigate("/check-out");
  };

  return (
    <>
      <div className="yourBag">
        <div className="container">
          <div className="content">
            <div className="title">
              Your Bag
              <span className="sm_shoppingBag">
                ({cartProduct.length})Items
              </span>
            </div>
            <div className="subTitle">
              Woo hoo! Let's complete your order, shall we?
            </div>
            <div className="section_one">
              <div className="subsec_one">
                <button onClick={continueShopping}>continue shopping</button>
              </div>
              <div className="subsec_two">
                <div className="shoppingBag">
                  Shopping Bag({cartProduct.length})
                </div>
                <div className="wishlist">Wishlist (0)</div>
              </div>
              <div className="subsec_three">
                {totalPrice === 0 ? (
                  <button className="button_disabled">CHECKOUT</button>
                ) : (
                  <button className="button_enabled" onClick={checkout}>
                    CHECKOUT
                  </button>
                )}
              </div>
            </div>
            <div className="section_two">
              <div className="table yourbag_bg">
                <div className="row_one">
                  <div className="data">Product</div>
                  <div className="data">Price</div>
                  <div className="data">Quantity</div>
                  <div className="data">Total</div>
                  <div className="data">Remove</div>
                </div>
                {totalPrice === 0 && (
                  <p className="emptyCart">You have an empty Cart...</p>
                )}
                {cartProduct.map((item) => {
                  return (
                    <>
                      <div className="row_two" key={item.id}>
                        <div className="data product">
                          <div className="image">
                            <img src={Mac} alt="" />
                          </div>
                          <div className="details">
                            <p className="productName">{item.productName}</p>
                            <p className="productID">{item.id}</p>
                          </div>
                        </div>
                        <div className="data price">${item.productPrice}</div>
                        <div className="data">
                          <div className="width_80px">
                            <BiMinus
                              className="minusBtn"
                              onClick={() =>
                                reduceQuantity(
                                  item,
                                  item.id,
                                  item.productName,
                                  item.productPrice
                                )
                              }
                            />
                            <p className="qty">{item.productQuantity}</p>
                            <IoAdd
                              className="addBtn"
                              onClick={() =>
                                addToCart(
                                  item,
                                  item.id,
                                  item.productName,
                                  item.productPrice
                                )
                              }
                            />
                          </div>
                        </div>
                        <div className="data total">{item.productTotal}</div>
                        <div className="data ">
                          <IoClose
                            className="remove"
                            onClick={() => removeItem(item.id)}
                          />
                        </div>
                      </div>
                      <hr />
                    </>
                  );
                })}
              </div>
              <div className="yourbag_sm">
                {totalPrice === 0 && (
                  <p className="emptyCart">You have an empty Cart...</p>
                )}
                {cartProduct.map((item) => {
                  return (
                    <>
                      <div className="sm_section_one" key={item.id}>
                        <div className="sm_sec_one">
                          <div className="sm_productImage">
                            <img src={Mac} alt="" />
                          </div>
                          <div className="sm_productDetails">
                            <p className="productName">{item.productName}</p>
                            <p className="productID">{item.id}</p>
                          </div>
                        </div>
                        <div className="sec_two">
                          <IoClose
                            className="remove"
                            onClick={() => removeItem(item.id)}
                          />
                        </div>
                      </div>
                      <div className="sm_section_two">
                        <div className="data price">{item.productPrice}</div>
                        <div className="data">
                          <div className="width_80px">
                            <BiMinus
                              className="minusBtn"
                              onClick={() =>
                                reduceQuantity(
                                  item,
                                  item.id,
                                  item.productName,
                                  item.productPrice
                                )
                              }
                            />
                            <p className="qty">{item.productQuantity}</p>
                            <IoAdd
                              className="addBtn"
                              onClick={() =>
                                addToCart(
                                  item,
                                  item.id,
                                  item.productName,
                                  item.productPrice
                                )
                              }
                            />
                          </div>
                        </div>
                        <div className="data total">{item.productTotal}</div>
                      </div>
                      <hr />
                    </>
                  );
                })}
              </div>
            </div>
            <div className="section_three">
              <p className="title">SUBTOTAL</p>
              <p className="subTotal">${totalPrice}</p>
              {totalPrice === 0 ? (
                <button className="button_disabled">CHECKOUT</button>
              ) : (
                <button className="button_enabled" onClick={checkout}>
                  CHECKOUT
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YourBag;

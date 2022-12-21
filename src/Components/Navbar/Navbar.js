import React, { useState } from "react";
import "./Navbar.css";
import notification from "../../svgIcons/notification-svgrepo-com.svg";
import cart from "../../svgIcons/cart-svgrepo-com.svg";
import { FiSearch } from "react-icons/fi";
import { GoGrabber } from "react-icons/go";
import { FaTrash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { BiMinus } from "react-icons/bi";

function Navbar({
  setSearch,
  search,
  scrolled,
  cartProduct,
  totalPrice,
  addToCart,
  reduceQuantity,
  removeItem,
}) {
  const [cartShow, setCartShow] = useState(false);

  // totalQuantity for counter start

  const totalQuantity = cartProduct.reduce(
    (quantity, item) => quantity + item.productQuantity,
    0
  );

  // totalQuantity for counter end

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const cartVisible = () => {
    setCartShow(true);
  };

  const cartHidden = () => {
    setCartShow(false);
  };

  const findProduct = (e) => {
    e.preventDefault();
    navigate("/productResult");
  };

  const view_bag = (e) => {
    e.preventDefault();
    navigate("/yourBag");
    setCartShow(false);
  };

  return (
    <>
      <div className="navbar">
        <div className={scrolled ? "boxShadow" : "container"}>
          <div className="content">
            <div className="section_one">
              <div className="wrapper">
                <div className="title">
                  <GoGrabber className="menu_icon" />
                  <Link to={"/"}>
                    <h2>Elextra</h2>
                  </Link>
                  <div className="cart_small_screen">
                    <img
                      src={cart}
                      alt=""
                      className="small_screen_cart"
                      onClick={() => cartVisible()}
                    />
                    <p className="item_in_cart_sm">{totalQuantity}</p>
                  </div>
                </div>
                <div className="search_section">
                  <form onSubmit={findProduct}>
                    <div className="search_box">
                      <FiSearch className="searchIcon" />
                      <input
                        type="text"
                        placeholder="Search Elextra"
                        className="search_input"
                        value={search}
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="section_three">
              <div className="account">
                <button className="sign_in" onClick={login}>
                  LOG IN
                </button>
              </div>
              <div className="cart_big_screen">
                <img
                  src={cart}
                  alt=""
                  className="big_screen_cart"
                  onClick={() => cartVisible()}
                />
                <p className="item_in_cart_lg">{totalQuantity}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="menu">
                    <div className="brand">
                        <h2>Elextra</h2>
                    </div>
                    <div className="title">Browse Department</div>

                </div> */}
        <div className={cartShow ? "cart_active" : "cart"}>
          <h2 className="title">Your Cart</h2>
          <div className="content">
            {totalPrice === 0 && (
              <p className="emptyCart">You have an empty cart...</p>
            )}

            {cartProduct.map((item) => {
              return (
                <>
                  <hr className="divider" />
                  <div className="cart_box" key={item.id}>
                    <img src="" alt="" className="cart_image" />
                    <div className="detail_box">
                      <div className="product_title">{item.productName}</div>
                      <div className="product_price">{item.productPrice}</div>
                      <div className="product_qty">
                        <IoAdd
                          className="add"
                          onClick={() =>
                            addToCart(
                              item,
                              item.id,
                              item.productName,
                              item.productPrice
                            )
                          }
                        />
                        <p className="count">{item.productQuantity}</p>
                        <BiMinus
                          className="minus"
                          onClick={() =>
                            reduceQuantity(
                              item,
                              item.id,
                              item.productName,
                              item.productPrice
                            )
                          }
                        />
                      </div>
                    </div>
                    <FaTrash
                      className="cart_remove"
                      onClick={() => removeItem(item.id)}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <div className="total">
            <div className="total_title">Total</div>
            <div className="total_price">${totalPrice}</div>
          </div>
          <button className="btn_buy" onClick={view_bag}>
            VIEW BAG
          </button>
          <IoClose className="close_cart" onClick={() => cartHidden()} />
        </div>
      </div>
    </>
  );
}

export default Navbar;

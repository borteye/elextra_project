import React, { useState, useEffect } from "react";
import "./Navbar.css";
// import menuGrid from "../../svgIcons/menu-grid-svgrepo-com.svg";
import notification from "../../svgIcons/notification-svgrepo-com.svg";
import cart from "../../svgIcons/cart-svgrepo-com.svg";
import Mac from "../../Assets/Mac.png";
// import profile from "../../svgIcons/user-profile-svgrepo-com.svg";
import { FiSearch } from "react-icons/fi";
import { GoGrabber } from "react-icons/go";
import { FaTrash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import ProductSearch from "../../Pages/ProductSearch/ProductSearch";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Navbar({ setSearch, search, scrolled, cartProduct, cartTotal }) {
  const [cartShow, setCartShow] = useState(false);

  const incCounter = useSelector((state) => state.counter.count);

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
                    <p className="item_in_cart_sm">{incCounter}</p>
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
                  Sign In
                </button>
                <img src={notification} alt="" className="notification" />
              </div>
              <div className="cart_big_screen">
                <img
                  src={cart}
                  alt=""
                  className="big_screen_cart"
                  onClick={() => cartVisible()}
                />
                <p className="item_in_cart_lg"></p>
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
            {cartProduct.map((item) => {
              return (
                <>
                  <div className="cart_box" key={item.id}>
                    <img src="" alt="" className="cart_image" />
                    <div className="detail_box">
                      <div className="product_title">{item.productName}</div>
                      <div className="product_price">{item.productPrice}</div>
                      <input
                        type="number"
                        class="cart_quantity"
                        value={item.productQuantity}
                      />
                    </div>
                    <FaTrash className="cart_remove" />
                  </div>
                </>
              );
            })}
          </div>
          <div className="total">
            <div className="total_title">Total</div>
            <div className="total_price">${cartTotal}</div>
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

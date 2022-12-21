import "./App.css";
import React, { useState, useEffect, useReducer } from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar.js";
import ProductSearch from "./Pages/ProductSearch/ProductSearch";
import LandingP from "./Pages/LandingPage/LandingP";
import ProductPreview from "./Pages/ProductPreview/ProductPreview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import YourBag from "./Pages/YourBag/YourBag";
import CheckOut from "./Pages/CheckOut/CheckOut";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import FlashDealsTandC from "./Containers/FlashDeals/FlashDealsTandC";
import FlashDealsPage from "./Containers/FlashDeals/FlashDealsPage";
import Payment from "./Pages/Payment/Payment";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [search, setSearch] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  //onScroll start
  const handleScroll = () => {
    if (window.scrollY >= 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  //onScroll end

  //resize screen start

  const resizeHandle = () => {
    if (window.innerWidth <= 768) {
      setScrolled(false);
    } else {
      setScrolled(true);
    }
  };

  window.addEventListener("resize", resizeHandle);
  //resize screen end

  //Data fetching for LandingPge start
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await axios.get("http://localhost:3009/products");
        const jsonResult = await result.data;

        setProduct(jsonResult);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);
  //Data fetching for LandingPage end

  //Data fetching from CART start
  useEffect(() => {
    const fetchCart = async () => {
      const result = await axios.get("http://localhost:3009/cart");
      const jsonResult = await result.data;

      setCartProduct(jsonResult);
    };
    fetchCart();
  }, [reducerValue]);
  //Data fetching from CART end

  //Add product to CART start
  let qty = 1;

  const addToCart = async (item, ID, name, price) => {
    try {
      let isExisting = false;

      const cartResult = await axios.get("http://localhost:3009/cart");

      if (cartResult.data.length === 0) {
        const cartItems = {
          id: item.id,
          productName: name,
          productPrice: price,
          productQuantity: qty,
          productTotal: price * qty,
        };
        await axios.post("http://localhost:3009/cart", cartItems);
      } else {
        cartResult.data.map((items) => {
          if (ID === items.id) {
            items.productQuantity += 1;
            const cartItems = {
              id: item.id,
              productName: name,
              productPrice: price,
              productQuantity: items.productQuantity,
              productTotal: price * items.productQuantity,
            };

            axios.put(`http://localhost:3009/cart/${items.id}`, cartItems);
            isExisting = true;
          }
        });
        if (isExisting === false) {
          const cartItems = {
            id: item.id,
            productName: name,
            productPrice: price,
            productQuantity: qty,
            productTotal: price * qty,
          };
          await axios.post("http://localhost:3009/cart", cartItems);
        }
      }
      toast.success("Added Product To Cart");
      forceUpdate();
    } catch (error) {
      alert(error);
    }
  };
  //Add product to CART end

  //Getting Cart totalPrice start
  const totalPrice = cartProduct.reduce(
    (price, item) => price + item.productQuantity * item.productPrice,
    0
  );
  //Getting Cart totalPrice end

  //Reduce Product Quantity in Cart start
  const reduceQuantity = async (item, ID, name, price) => {
    try {
      const cartResult = await axios.get("http://localhost:3009/cart");

      cartResult.data.map((items) => {
        if (ID === items.id) {
          items.productQuantity -= 1;
          const cartItems = {
            id: item.id,
            productName: name,
            productPrice: price,
            productQuantity: items.productQuantity,
            productTotal: price * items.productQuantity,
          };
          if (items.productQuantity === 0) {
            axios.delete(`http://localhost:3009/cart/${item.id}`);
          }
          axios.put(`http://localhost:3009/cart/${items.id}`, cartItems);
        }
      });
      toast.error("Removed product from cart");
      forceUpdate();
    } catch (error) {}
  };
  //Reduce Product Quantity in Cart end

  //Delete From Cart Start
  const removeItem = async (ID) => {
    try {
      const cartResult = await axios.get("http://localhost:3009/cart");
      cartResult.data.map((item) => {
        if (ID === item.id) {
          axios.delete(`http://localhost:3009/cart/${item.id}`);
        }
      });
      toast.error("Removed product from cart");
      forceUpdate();
    } catch (error) {}
  };
  //Delete From Cart End

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar
          setSearch={setSearch}
          search={search}
          scrolled={scrolled}
          cartProduct={cartProduct}
          totalPrice={totalPrice}
          addToCart={addToCart}
          reduceQuantity={reduceQuantity}
          removeItem={removeItem}
        />
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/sign-up" exact element={<SignUp />} />
          <Route
            path="/"
            exact
            element={
              <LandingP
                loading={loading}
                error={error}
                product={product}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/productResult"
            exact
            element={<ProductSearch search={search} data={product} />}
          />
          <Route
            path="/productPreview"
            // path="/productPreview/:id/:category/:name"
            exact
            element={<ProductPreview />}
          />
          <Route path="/check-out" exact element={<CheckOut />} />
          <Route path="/flash-sales" exact element={<FlashDealsPage />} />
          <Route
            path="/flash-sales-terms"
            exact
            element={<FlashDealsTandC />}
          />
          <Route
            path="/yourBag"
            exact
            element={
              <YourBag
                cartProduct={cartProduct}
                addToCart={addToCart}
                reduceQuantity={reduceQuantity}
                removeItem={removeItem}
                totalPrice={totalPrice}
              />
            }
          />
          <Route path="/payment" exact element={<Payment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

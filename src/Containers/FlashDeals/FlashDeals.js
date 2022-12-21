import React from "react";
import "./FlashDeals.css";
import CountDown from "../../Components/CountDown/CountDown";
import { MdBolt } from "react-icons/md";
import clothen from "../../Assets/Clothen.png";
import FSProducts from "./FSProducts";
import { useNavigate } from "react-router-dom";

function FlashDeals() {
  const navigate = useNavigate();

  const flashSales = (e) => {
    e.preventDefault();
    navigate("/flash-sales");
  };

  return (
    <>
      <div className="flashDeals">
        <div className="container">
          <div className="content">
            <div className="header" onClick={flashSales}>
              <div className="head">
                <MdBolt className="bolt" />
                <h4>Flash Deals</h4>
              </div>
              <div className="countDown">{/* <CountDown /> */}</div>
            </div>
            <div className="items">
              <FSProducts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlashDeals;

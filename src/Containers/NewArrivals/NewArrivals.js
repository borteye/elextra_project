import React from "react";
import "./NewArrivals.css";
import gamepad from "../../Assets/gamepad.png";
import NewArrivalCaro from "./NewArrivalCaro";

function NewArrivals() {
  return (
    <>
      <div className="newArrivals">
        <div className="container">
          <div className="content">
            <div className="title">New Arrivals</div>
            <div className="overall">
              <div className="sec_one">
                <div className="card">
                  <div className="image">
                    <img src={gamepad} alt="" />
                  </div>
                  <div className="details">
                    <p className="pName">GAME PAD</p>
                    <p className="pPrice">$989.00</p>
                    <button>Add To Cart</button>
                  </div>
                </div>
              </div>
              <div className="sec_two">
                <NewArrivalCaro />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrivals;

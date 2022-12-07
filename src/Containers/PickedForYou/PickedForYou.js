import React from "react";
import PFYProducts from "./PFYProducts";
import loading04 from "../../Assets/loading04.gif";

import "./PickedForYou.css";

function PickedForYou({ loading, error, product, addToCart }) {
  return (
    <>
      <div className="picked_for_you">
        <div className="container">
          <div className="content">
            <div className="section_one">
              <div className="header">
                <h1>What We Picked For You</h1>
              </div>
            </div>
            <div
              className={
                (loading && "section_two_loading") ||
                (!loading && "section_two" && error && "section_two_loading") ||
                (!error && "section_two")
              }
            >
              {loading && (
                <div className="loading_error">
                  <img src={loading04} alt="" className="pyfLoader" />
                </div>
              )}

              {error && (
                <div className="loading_error">
                  <h2>...Opps,an Error Occured Getting Data</h2>
                </div>
              )}

              {!error && (
                <PFYProducts product={product} addToCart={addToCart} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PickedForYou;

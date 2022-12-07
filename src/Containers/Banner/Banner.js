import React from "react";
import "./Banner.css";
import { FiArrowDown } from "react-icons/fi";

function Banner() {

    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="content">
                        <div className="section_one">
                            <div className="icon">
                                <FiArrowDown />
                            </div>
                            <h1>$10 Discount</h1>
                        </div>
                        <div className="section_two">
                            <p> Enter BESTSELLERQ3 for $10 off selected items.*</p>
                            <span className="bar"> | </span>
                            <p> *Mini purchase 50$, valid till 24th Sept. See <a href="#">T&C </a></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner;
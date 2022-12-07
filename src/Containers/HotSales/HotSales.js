import React from "react";
import "./HotSales.css";
import { ImFire } from "react-icons/im";
import systemUnit from "../../Assets/systemUnit.png";
import HSProducts from "./HSProducts";



function HotSales() {







    return (
        <>

            <div className="hotSales">
                <div className="container">
                    <div className="content">
                        <div className="header">
                            <div className="section_one">
                                <ImFire className="fire" />
                                <h4>Hot Sales</h4>
                            </div>
                            <div className="section_two">
                                <p>Top 10</p>
                            </div>
                        </div>
                        <div className="items">
                            <HSProducts />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HotSales;
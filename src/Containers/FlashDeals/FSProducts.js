import React from "react";
import clothen from "../../Assets/Clothen.png";
import { FiArrowRight } from "react-icons/fi";

function FSProducts() {

    const fsProducts = [
        {
            title: " PRODUCT NAME",
            price: "$315",
            image: clothen
        },
        {
            title: " PRODUCT NAME",
            price: "$315",
            image: clothen
        },
        {
            title: " PRODUCT NAME",
            price: "$315",
            image: clothen
        },
    ]


    function FSProuctWidget() {


        return (
            <>
                {
                    fsProducts.map((data) => {
                        return (
                            <div className="card">
                                <div className="details">
                                    <div className="about_product">
                                        <div className="product_title">
                                            {data.title}
                                        </div>
                                        <div className="product_price">
                                            <strong>{data.price}</strong>
                                        </div>
                                        <button>Buy Now <FiArrowRight className="arrow" /></button>
                                    </div>
                                </div>
                                <div className="image">
                                    <img src={data.image} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }


    return (
        <>
            <FSProuctWidget />
        </>
    )
}

export default FSProducts;
import React from "react";
import systemUnit from "../../Assets/systemUnit.png";
import cloths from "../../Assets/Clothen.png";


function HSProducts() {

    const hsProducts = [
        {
            image: systemUnit,
            title: "PRODUCT NAME",
            new_price: "$315",
            old_price: "$615"
        },
        {
            image: cloths,
            title: "PRODUCT NAME",
            new_price: "$315",
            old_price: "$615"
        },
        {
            image: cloths,
            title: "PRODUCT NAME",
            new_price: "$315",
            old_price: "$615"
        },
        {
            image: cloths,
            title: "PRODUCT NAME",
            new_price: "$315",
            old_price: "$615"
        },
        {
            image: systemUnit,
            title: "PRODUCT NAME",
            new_price: "$315",
            old_price: "$615"
        },
        {
            image: systemUnit,
            title: "PRODUCT NAME",
            new_price: "$315",
            old_price: "$615"
        },
        {
            image: systemUnit,
            title: "PRODUCT NAME",
            new_price: "$315",
            old_price: "$615"
        },
        {
            image: systemUnit,
            title: "PRODUCT NAME",
            new_price: "$315",
            old_price: "$615"
        },



    ]

    function HSProductWidget() {

        return (
            <>

                {
                    hsProducts.map((data) => {
                        return (

                            <div className="card">
                                <div className="details">
                                    <div className="image">
                                        <img src={data.image} alt="" />
                                    </div>
                                    <hr />
                                </div>
                                <div className="about_product">
                                    <div className="product_title">
                                        {data.title}
                                    </div>
                                    <div className="product_price">
                                        <div className="new_price">
                                            {data.new_price}
                                        </div>
                                        <div className="old_price">
                                            {data.old_price}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }

            </>

        )

    }


    return <HSProductWidget />
}

export default HSProducts;
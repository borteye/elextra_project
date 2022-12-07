import React from "react";
import shipping from "../../Assets/free-shipping.png";
import return_box from "../../Assets/return-box.png";
import secure_payment from "../../Assets/credit-card.png";
import support from "../../Assets/headphones.png";

function ServicesItems() {

    const serviceItems = [
        {
            image: shipping,
            title: "Free Delivery",
            about: "Get free delivery for every order above $20"
        },
        {
            image: return_box,
            title: "90 Days Return",
            about: "Return within 90days of receiving your order"
        },
        {
            image: secure_payment,
            title: "Secure Payment",
            about: "100% secure payment. Get easy support anytime"
        },
        {
            image: support,
            title: "24/7 Online Support",
            about: "Dedicated support anytime and Anywhere"
        },
    ]


    function SerivceItemsWidget() {

        return (
            <>
                {
                    serviceItems.map((data) => {
                        return (
                            <div className="card">
                                <div className="image">
                                    <img src={data.image} alt="" />
                                </div>
                                <div className="details">
                                    <div className="card_title">
                                        <strong>{data.title}</strong>
                                    </div>
                                    <div className="about_card">
                                        {data.about}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </>
        )
    }



    return (
        <SerivceItemsWidget />
    )
}

export default ServicesItems;
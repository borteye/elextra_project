import React from "react";



function HerCarousel({ data, index }) {


    return (

        <div className={index ? "current_card" : "previous_card"}>
            <div className="details">
                <p className="card_title">{data.title}</p>
                <h1 className="card_description">{data.description}</h1>
                <p className="about_card">{data.about}</p>
                <h4 className="card_price">{data.price}</h4>
                <button className="card_button">{data.button}</button>
            </div>
        </div>

    )
}

export default HerCarousel;
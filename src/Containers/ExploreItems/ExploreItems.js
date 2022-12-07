import React from "react";
import "./ExploreItems.css";
import Nintendo from "../../Assets/Nintendo.png";
import Mac from "../../Assets/Mac.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


function ExploreItems() {

    const exploreItems = [
        {
            image: Nintendo,
            price: "$299.00",
            about: "The Nintendo Switch family is home to exclusive games from franchises like Super Smash Bros, The Legend of Zelda, Mario Kart, and many more",
            stars: " Stars",
            shipping_day: "  1-day shipping"
        },
        {
            image: Mac,
            price: "$299.00",
            about: "The Nintendo Switch family is home to exclusive games from franchises like Super Smash Bros, The Legend of Zelda, Mario Kart, and many more",
            stars: " Stars",
            shipping_day: "  1-day shipping"
        },
        {
            image: Nintendo,
            price: "$299.00",
            about: "The Nintendo Switch family is home to exclusive games from franchises like Super Smash Bros, The Legend of Zelda, Mario Kart, and many more",
            stars: " Stars",
            shipping_day: "  1-day shipping"
        },
        {
            image: Mac,
            price: "$299.00",
            about: "The Nintendo Switch family is home to exclusive games from franchises like Super Smash Bros, The Legend of Zelda, Mario Kart, and many more",
            stars: " Stars",
            shipping_day: "  1-day shipping"
        },
        {
            image: Nintendo,
            price: "$299.00",
            about: "The Nintendo Switch family is home to exclusive games from franchises like Super Smash Bros, The Legend of Zelda, Mario Kart, and many more",
            stars: " Stars",
            shipping_day: "  1-day shipping"
        },
        {
            image: Mac,
            price: "$299.00",
            about: "The Nintendo Switch family is home to exclusive games from franchises like Super Smash Bros, The Legend of Zelda, Mario Kart, and many more",
            stars: " Stars",
            shipping_day: "  1-day shipping"
        },
        {
            image: Nintendo,
            price: "$299.00",
            about: "The Nintendo Switch family is home to exclusive games from franchises like Super Smash Bros, The Legend of Zelda, Mario Kart, and many more",
            stars: " Stars",
            shipping_day: "  1-day shipping"
        },
        {
            image: Mac,
            price: "$299.00",
            about: "The Nintendo Switch family is home to exclusive games from franchises like Super Smash Bros, The Legend of Zelda, Mario Kart, and many more",
            stars: " Stars",
            shipping_day: "  1-day shipping"
        },
        {
            image: Nintendo,
            price: "$299.00",
            about: "The Nintendo Switch family is home to exclusive games from franchises like Super Smash Bros, The Legend of Zelda, Mario Kart, and many more",
            stars: " Stars",
            shipping_day: "  1-day shipping"
        },
    ]



    return (
        <div className="explore_items">
            <div className="container">
                <div className="content">
                    <div className="title">
                        <h3>Products you may also like</h3>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={0}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper_bg"
                    >

                        {
                            exploreItems.map((data) => {
                                return (
                                    <>
                                        <SwiperSlide>
                                            <div className="card_container">
                                                <div className="card">
                                                    <div className="add_to_list">

                                                    </div>
                                                    <div className="product_image">
                                                        <img src={data.image} alt="" />
                                                    </div>
                                                    <button>+ Add</button>
                                                    <div className="product_details">
                                                        <div className="product_price">
                                                            {data.price}
                                                        </div>
                                                        <div className="about_product">
                                                            {data.about}
                                                        </div>
                                                        <div className="rating">
                                                            {data.stars}
                                                        </div>
                                                        <div className="shipping_day">
                                                            {data.shipping_day}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </>
                                )
                            })
                        }
                    </Swiper>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={0}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper_min"
                    >

                        {
                            exploreItems.map((data) => {
                                return (
                                    <>
                                        <SwiperSlide>
                                            <div className="card_container">
                                                <div className="card">
                                                    <div className="add_to_list">

                                                    </div>
                                                    <div className="product_image">
                                                        <img src={data.image} alt="" />
                                                    </div>
                                                    <button>+ Add</button>
                                                    <div className="product_details">
                                                        <div className="product_price">
                                                            {data.price}
                                                        </div>
                                                        <div className="about_product">
                                                            {data.about}
                                                        </div>
                                                        <div className="rating">
                                                            {data.stars}
                                                        </div>
                                                        <div className="shipping_day">
                                                            {data.shipping_day}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </>
                                )
                            })
                        }
                    </Swiper>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        slidesPerGroup={1}
                        loop={true}
                        centeredSlides={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper_sm"
                    >

                        {
                            exploreItems.map((data) => {
                                return (
                                    <>
                                        <SwiperSlide>
                                            <div className="card_container">
                                                <div className="card">
                                                    <div className="add_to_list">

                                                    </div>
                                                    <div className="product_image">
                                                        <img src={data.image} alt="" />
                                                    </div>
                                                    <button>+ Add</button>
                                                    <div className="product_details">
                                                        <div className="product_price">
                                                            {data.price}
                                                        </div>
                                                        <div className="about_product">
                                                            {data.about}
                                                        </div>
                                                        <div className="rating">
                                                            {data.stars}
                                                        </div>
                                                        <div className="shipping_day">
                                                            {data.shipping_day}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div >
    )
}

export default ExploreItems;
import React, { useState } from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import SwiperCore, { Autoplay } from "swiper";
import HeroCarousel from "./HeroCarousel";

function Hero() {

    SwiperCore.use([Autoplay]);

    const Card_Details = [
        {
            title: "Popular This Week!",
            description: "Nintendo Switch Version 2.0",
            about: "Switch your game, and switch your level! Nintendo Switch takethe next level of nintendo games.",
            price: "315",
            button: "SHOP NOW"
        },
        {
            title: "Popular This Week!",
            description: "Nintendo Switch Version 2.0",
            about: "Switch your game, and switch your level! Nintendo Switch takethe next level of nintendo games.",
            price: "315",
            button: "SHOP NOW"
        },
        {
            title: "Popular This Week!",
            description: "Nintendo Switch Version 2.0",
            about: "Switch your game, and switch your level! Nintendo Switch takethe next level of nintendo games.",
            price: "315",
            button: "SHOP NOW"
        },
    ]


    function CardWidget() {

        const [swipeIndex, setSwipeIndex] = useState(0);

        return (
            <>

                <Swiper
                    grabCursor={true}
                    modules={[Autoplay]}
                    className="small_screen_carousel"
                    slidesPerView={1.01}
                    spaceBetween={35}
                    centeredSlides={true}
                    loopFillGroupWithBlank={false}
                    loop={true}
                    autoplay={{ delay: 10000 }}
                    speed={2000}
                    onSlideChange={(i) => {
                        setSwipeIndex(i.realIndex)
                    }}
                >

                    {
                        Card_Details.map((data, i) => {
                            return (
                                <SwiperSlide>
                                    <HeroCarousel data={data} index={i === swipeIndex} />
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>

                <Swiper
                    grabCursor={true}
                    modules={[Autoplay]}
                    className="big_screen_carousel"
                    slidesPerView={1.2}
                    spaceBetween={5}
                    centeredSlides={true}
                    loopFillGroupWithBlank={false}
                    loop={true}
                    autoplay={{ delay: 10000 }}
                    speed={2000}
                    onSlideChange={(i) => {
                        setSwipeIndex(i.realIndex)
                    }}
                >

                    {
                        Card_Details.map((data, i) => {
                            return (
                                <SwiperSlide>
                                    <HeroCarousel data={data} index={i === swipeIndex} />
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </>
        )
    }


    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="content">
                        <CardWidget />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
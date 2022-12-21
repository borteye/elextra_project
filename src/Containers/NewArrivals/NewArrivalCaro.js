import React from "react";
import gamepad from "../../Assets/gamepad.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import SwiperCore, { Grid, Pagination, Autoplay } from "swiper";

function NewArrivalCaro() {
  SwiperCore.use([Autoplay]);

  const newArrival = [
    {
      image: gamepad,
      name: "D JI Mavic Pro",
      price: "899",
    },
    {
      image: gamepad,
      name: "D JI Mavic Pro",
      price: "899",
    },
    {
      image: gamepad,
      name: "D JI Mavic Pro",
      price: "899",
    },
    {
      image: gamepad,
      name: "D JI Mavic Pro",
      price: "899",
    },
    {
      image: gamepad,
      name: "D JI Mavic Pro",
      price: "899",
    },
    {
      image: gamepad,
      name: "D JI Mavic Pro",
      price: "899",
    },
    {
      image: gamepad,
      name: "D JI Mavic Pro",
      price: "899",
    },
    {
      image: gamepad,
      name: "D JI Mavic Pro",
      price: "899",
    },
    {
      image: gamepad,
      name: "D JI Mavic Pro",
      price: "899",
    },
    {
      image: gamepad,
      name: "D JI Mavic Pro",
      price: "899",
    },
    {
      image: gamepad,
      name: "D JI Mavic Pro",
      price: "899",
    },
    {
      image: gamepad,
      name: "D JI Mavic Pro",
      price: "899",
    },
    {
      image: gamepad,
      name: "D JI Mavic Pro",
      price: "899",
    },
    {
      image: gamepad,
      name: "D JI Mavic Pro",
      price: "899",
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        modules={[Grid, Pagination, Autoplay]}
        loopFillGroupWithBlank={false}
        autoplay={{ delay: 1000 }}
        speed={1000}
        className="big_mySwiper"
      >
        {newArrival.map((item) => {
          return (
            <SwiperSlide>
              <div className="card1">
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <div className="details">
                  <p className="pName">{item.name}</p>
                  <p className="pPrice">${item.price}</p>
                  <button>BUY NOW</button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        slidesPerView={1.4}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        modules={[Grid, Pagination, Autoplay]}
        loopFillGroupWithBlank={false}
        autoplay={{ delay: 1000 }}
        speed={1000}
        className="small_mySwiper"
      >
        {newArrival.map((item) => {
          return (
            <SwiperSlide>
              <div className="card1">
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <div className="details">
                  <p className="pName">{item.name}</p>
                  <p className="pPrice">${item.price}</p>
                  <button>BUY NOW</button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        slidesPerView={1.5}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        modules={[Grid, Pagination, Autoplay]}
        loopFillGroupWithBlank={false}
        autoplay={{ delay: 1000 }}
        speed={1000}
        className="verySM_mySwiper"
      >
        {newArrival.map((item) => {
          return (
            <SwiperSlide>
              <div className="card1">
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <div className="details">
                  <p className="pName">{item.name}</p>
                  <p className="pPrice">${item.price}</p>
                  <button>BUY NOW</button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default NewArrivalCaro;

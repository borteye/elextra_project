import React from "react";
import "./Category.css";
import gmail from "../../Assets/gmail.png";
import gamepadIcon from "../../Assets/gamepad.svg";
import camera from "../../Assets/camera.svg";
import conditioner from "../../Assets/conditioner.svg";
import tv1 from "../../Assets/tv1.svg";
import tv3 from "../../Assets/tv3.svg";
import tv4 from "../../Assets/tv4.svg";
import mouse from "../../Assets/mouse.svg";

function Category() {
  const categories = [
    {
      name: "accessories",
      image: gamepadIcon,
    },
    {
      name: "home appliance",
      image: conditioner,
    },
    {
      name: "photography",
      image: camera,
    },
    {
      name: "watchable",
      image: tv1,
    },
    {
      name: "computer acces",
      image: mouse,
    },
    {
      name: "home appliance",
      image: conditioner,
    },
  ];
  return (
    <>
      <div className="category">
        <div className="container">
          <div className="content">
            <div className="title">Categories</div>
            <div className="overAll">
              {categories.map((item) => {
                return (
                  <div className="card">
                    <div className="sec_one">
                      <p className="category_name">{item.name}</p>
                      <div className="sec_two">
                        <div className="image">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;

import React from "react";
import { Link } from "react-router-dom";
import buy from "../../svgIcons/buy-svgrepo-com.svg";
import Mac from "../../Assets/Mac.png";
import Nintendo from "../../Assets/Nintendo.png";
import headphone from "../../Assets/headphones.png";
import bag1 from "../../Assets/bag1.svg";

const FeaturedProduct = ({ product, addToCart }) => {
  const products = [
    {
      id: "001",
      image: Mac,
      category: "laptop",
      name: "ASUS",
      price: "1029",
    },
    {
      id: "002",
      image: Nintendo,
      category: "gaming",
      name: "Nintendo",
      price: "1899",
    },
    {
      id: "003",
      image: headphone,
      category: "accessories",
      name: "Headphone",
      price: "486",
    },
    {
      id: "004",
      image: Mac,
      category: "laptop",
      name: "ASUS",
      price: "1029",
    },
    {
      id: "005",
      image: Nintendo,
      category: "gaming",
      name: "Nintendo",
      price: "1899",
    },
    {
      id: "006",
      image: headphone,
      category: "accessories",
      name: "Headphone",
      price: "486",
    },
    {
      id: "007",
      image: Nintendo,
      category: "gaming",
      name: "Nintendo",
      price: "1899",
    },
    {
      id: "008",
      image: headphone,
      category: "accessories",
      name: "Headphone",
      price: "486",
    },
  ];
  return (
    <>
      {products.map((item) => {
        return (
          <>
            <div className="card" key={item.id}>
              <div className="image">
                <img src={item.image} alt="" />
              </div>
              <div className="details">
                <p className="category">{item.category}</p>
                <h3 className="name">{item.name}</h3>
                <div className="price_btn">
                  <p className="price">${item.price}</p>
                  <button
                    onClick={() =>
                      addToCart(item, item.id, item.name, item.price)
                    }
                  >
                    <img src={bag1} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <div className="card1">
        <div className="image">
          <img src={Mac} alt="" />
        </div>
        <div className="details">
          <p className="category">laptop</p>
          <h3 className="name">ASUS</h3>
          <p className="price">$200</p>
        </div>
        <button>Add To Cart</button>
      </div>
    </>
  );
};

export default FeaturedProduct;

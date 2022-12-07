import React from "react";
import "./LandingP.css";
import Hero from "../../Containers/Hero/Hero";
import Banner from "../../Containers/Banner/Banner";
import HotSales from "../../Containers/HotSales/HotSales";
import FlashDeals from "../../Containers/FlashDeals/FlashDeals";
import PickedForYou from "../../Containers/PickedForYou/PickedForYou";
import Services from "../../Containers/Servicess/Services";

function LandingP({ loading, error, product, addToCart }) {
  return (
    <div className="landing_page">
      <Hero />
      <Services />
      <Banner />
      <HotSales />
      <FlashDeals />
      <PickedForYou
        loading={loading}
        error={error}
        product={product}
        addToCart={addToCart}
      />
    </div>
  );
}

export default LandingP;

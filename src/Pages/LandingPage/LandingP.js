import React from "react";
import "./LandingP.css";
import Hero from "../../Containers/Hero/Hero";
import Banner from "../../Containers/Banner/Banner";
import HotSales from "../../Containers/HotSales/HotSales";
import FlashDeals from "../../Containers/FlashDeals/FlashDeals";
import Featured from "../../Containers/FeaturedProducts/Featured";
import Services from "../../Containers/Servicess/Services";
import Category from "../../Containers/Category/Category";
import NewArrivals from "../../Containers/NewArrivals/NewArrivals";

function LandingP({ loading, error, product, addToCart }) {
  return (
    <div className="landing_page">
      <Hero />
      <Category />
      <NewArrivals />
      <Services />
      <Banner />
      <HotSales />
      <Featured
        loading={loading}
        error={error}
        product={product}
        addToCart={addToCart}
      />
      <FlashDeals />
    </div>
  );
}

export default LandingP;

import React from "react";
import Hero from "./Hero";
import Brands from "./Brands";
import ProductSection from "./ProductSection";
import Statistics from "./Statistics";
import Footer from "./Footer";
import Testimonies from "./Testimonies";

const Home = () => {
  return (
    <div>
      {" "}
      <Hero />
      <Brands />
      <ProductSection />
      <Statistics />
      <Testimonies />
      <Footer />
    </div>
  );
};

export default Home;

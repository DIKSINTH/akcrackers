import React from "react";
import Header from "../components/Header.jsx";
import Suggestions from "../components/Suggestions.jsx";
import HeroSlider from "../components/HeroSlider.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <Suggestions />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default Home;

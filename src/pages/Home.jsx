import React from "react";
import Header from "../components/Header.jsx";
import Suggestions from "../components/Suggestions.jsx";
import HeroSlider from "../components/HeroSlider.jsx";
function Home() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <Suggestions />
    </div>
  );
}

export default Home;

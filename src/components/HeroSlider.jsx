import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";

const slides = [
  {
    id: 1,
    image: img2,
  },
  {
    id: 2,
    image: img3,
  },
  {
    id: 3,
    image: img4,
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  // ✅ Automatic Slide (Clean Version)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Manual Next
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // ✅ Manual Previous
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt="AK Crackers Fireworks"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <h1
              data-aos="fade-up"
              className="text-[#fefeff] text-2xl md:text-5xl font-bold mb-4 drop-shadow-lg"
            >
              Welcome To The Great
            </h1>
            <h2
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-[#f26104] text-3xl md:text-6xl font-extrabold drop-shadow-lg"
            >
              AK Crackers
            </h2>
          </div>
        </div>
      ))}

      {/* PREV BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#525252]/60 text-white p-3 rounded-full hover:bg-[#f26104] transition z-20"
      >
        ❮
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#525252]/60 text-white p-3 rounded-full hover:bg-[#f26104] transition z-20"
      >
        ❯
      </button>

      {/* DOTS */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-[#f26104]" : "bg-[#fefeff]"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;

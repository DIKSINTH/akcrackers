import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1608889175113-6f0c6f88c4ef?q=80&w=1600",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1600",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?q=80&w=1600",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line react-hooks/immutability
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

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
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt="Jelly Crackers Fireworks"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-[#fefeff] text-2xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              Welcome To The Great
            </h1>
            <h2 className="text-[#f26104] text-3xl md:text-6xl font-extrabold drop-shadow-lg">
              AK Crackers
            </h2>
          </div>
        </div>
      ))}

      {/* Manual Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#525252]/60 text-white p-3 rounded-full hover:bg-[#f26104] transition"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#525252]/60 text-white p-3 rounded-full hover:bg-[#f26104] transition"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
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

      {/* FIXED WHATSAPP ICON */}
      <a
        href="https://wa.me/919159799823"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 z-50"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="w-14 h-14 hover:scale-110 transition"
        />
      </a>

      {/* FIXED ESTIMATE BUTTON */}
      <a
        href="/estimate"
        className="fixed bottom-5 right-5 z-50 bg-[#f26104] text-[#fefeff] px-6 py-3 rounded-full shadow-lg hover:scale-105 transition font-semibold"
      >
        Estimate Now
      </a>
    </section>
  );
};

export default HeroSlider;

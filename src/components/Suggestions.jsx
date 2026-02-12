import React from "react";

// add your images here
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";

const suggestions = [img1, img2, img3, img4, img5, img6];

export default function Suggestions() {
  return (
    <section className="bg-white py-14">
      {/* ===== Heading Bar ===== */}
      <div className="bg-[#f26104] py-4 shadow-lg">
        <h2 className="text-center text-white text-2xl md:text-3xl font-bold tracking-wide">
          Our Suggestions
        </h2>
      </div>

      {/* ===== Cards Grid ===== */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div
          className="
            grid gap-8
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {suggestions.map((img, index) => (
            <div
              key={index}
              className="
                group relative
                overflow-hidden
                rounded-2xl
                border-4 border-[#f26104]
                shadow-md
                hover:shadow-2xl
                transition duration-300
                hover:-translate-y-2
                cursor-pointer
              "
            >
              {/* Image */}
              <img
                src={img}
                alt="suggestion"
                className="w-full h-60 object-cover"
              />

              {/* Hover Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-[#525252]/80
                  flex items-center justify-center
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
              >
                <button
                  className="
                    bg-[#f26104]
                    text-white
                    px-6 py-2
                    rounded-full
                    font-semibold
                    hover:scale-105
                    transition
                  "
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

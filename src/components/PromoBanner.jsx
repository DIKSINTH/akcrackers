import React from "react";
import img2 from "../assets/images/4.jpg";

export default function PromoBanner() {
  return (
    <section className="w-full bg-[#fefeff] py-8">
      <div className="w-full">
        {/* Single Full Banner Image */}
        <div className="overflow-hidden shadow-2xl border-4 ">
          <img
            src={img2}
            alt="AK Crackers Diwali Fireworks Celebration Banner"
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

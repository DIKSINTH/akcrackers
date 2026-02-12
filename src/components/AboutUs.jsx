import React from "react";
import aboutImg from "../assets/images/logo.png"; // replace with your image path

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-white py-20 px-6 md:px-20"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="AK Crackers biggest Diwali fireworks sale products"
            loading="lazy"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* SEO Heading */}
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold mb-6 text-[#f26104]"
          >
            About Us
          </h2>

          {/* Paragraphs */}
          <p className="text-[#525252] leading-7 mb-5">
            <strong>AK Crackers</strong> is one of the most trusted and reliable
            online crackers stores in Sivakasi, offering premium quality Diwali
            crackers at the best prices. We provide a wide range of traditional,
            fancy, and eco-friendly fireworks for every celebration.
          </p>

          <p className="text-[#525252] leading-7 mb-10">
            Our mission is to deliver safe, certified, and high-quality products
            with fast shipping and excellent customer service. We follow strict
            safety standards from packing to delivery to ensure a joyful and
            secure festive experience.
          </p>

          {/* STATS CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#fefeff] rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-[#f26104]">200+</h3>
              <p className="text-[#525252] mt-2">Products</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fefeff] rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-[#f26104]">500+</h3>
              <p className="text-[#525252] mt-2">Happy Clients</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fefeff] rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-[#f26104]">100%</h3>
              <p className="text-[#525252] mt-2">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

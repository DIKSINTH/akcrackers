import React from "react";
import bannerImg from "../assets/images/5.jpg"; // add your image

const VisionMission = () => {
  return (
    <section id="vision-mission" aria-labelledby="vision-heading">
      {/* ================= BANNER ================= */}
      <div
        className="relative h-[420px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            We are one of the leading sellers of Sivakasi Firecrackers
          </h2>

          <p className="text-lg md:text-xl mb-6 text-gray-200">
            We are available 24 x 7 Support. Order and lets Purchase
          </p>

          <a
            href="/contact"
            className="bg-[#f26104] hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition"
          >
            CONTACT NOW
          </a>
        </div>
      </div>

      {/* ================= VISION & MISSION ================= */}
      <div className="bg-white py-20 px-6 md:px-20 text-center">
        <h3
          id="vision-heading"
          className="text-4xl md:text-5xl font-bold text-[#f26104] mb-8"
        >
          Vision & Mission
        </h3>

        <p className="max-w-4xl mx-auto text-[#525252] mb-5 text-lg leading-8">
          To be the best wholesale and retail dealer for all kinds of fancy
          crackers and gift boxes to our beloved customers.
        </p>

        <p className="max-w-4xl mx-auto text-[#525252] text-lg leading-8">
          Our mission is to provide quality and innovative fireworks products at
          reasonable prices and light up every celebration with happiness and
          safety.
        </p>
      </div>
    </section>
  );
};

export default VisionMission;

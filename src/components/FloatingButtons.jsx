import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const FloatingButtons = () => {
  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919159799823"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 z-50"
        data-aos="fade-right"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="Chat on WhatsApp"
          className="w-14 h-14 hover:scale-110 transition"
        />
      </a>

      {/* ESTIMATE BUTTON */}
      <Link
        to="/estimate"
        className="fixed bottom-5 right-5 z-50 bg-[#f26104] text-[#fefeff] px-6 py-3 rounded-full shadow-lg hover:scale-105 transition font-semibold"
        data-aos="fade-left"
      >
        Estimate Now
      </Link>
    </>
  );
};

export default FloatingButtons;

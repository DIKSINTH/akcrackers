import React, { useState } from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full shadow-md">
      {/* TOP BAR */}
      <div className="bg-[#525252] text-[#fefeff] text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
          {/* MARQUEE TEXT */}
          <marquee className="w-full md:w-auto text-center md:text-left">
            AK Crackers
          </marquee>

          <div className="flex gap-4 mt-1 md:mt-0">
            <span>📞 +91 91597 99823</span>
            <span>Sivakasi</span>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="bg-[#fefeff]" aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* LOGO ONLY */}
          <a href="/" className="flex items-center" title="AK Crackers - Home">
            <img src={logo} alt="AK Crackers Logo" className="h-12 w-auto" />
          </a>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 items-center text-[#525252] font-medium">
            <li>
              <a href="/" className="hover:text-[#f26104] transition">
                Home
              </a>
            </li>
            <li>
              <a href="/estimate" className="hover:text-[#f26104] transition">
                Estimate
              </a>
            </li>
            <li>
              <a
                href="/payment-information"
                className="hover:text-[#f26104] transition"
              >
                Payment Info
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#f26104] transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#f26104] transition">
                Contact
              </a>
            </li>

            <li>
              <a
                href="/price-list"
                className="bg-[#f26104] text-[#fefeff] px-5 py-2 rounded-full hover:opacity-90 transition"
              >
                Price List
              </a>
            </li>
          </ul>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-[#525252]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="#525252"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-[#fefeff] border-t border-[#525252]/20">
            <ul className="flex flex-col px-6 py-4 gap-4 text-[#525252] font-medium">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/estimate">Estimate</a>
              </li>
              <li>
                <a href="/payment-information">Payment Info</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a
                  href="/price-list"
                  className="bg-[#f26104] text-[#fefeff] px-4 py-2 rounded-full inline-block text-center"
                >
                  Price List
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      {/* MARQUEE NOTICE */}
      <div className="bg-[#f26104] overflow-hidden py-2">
        <div className="whitespace-nowrap animate-marquee text-[#fefeff] text-sm font-medium">
          ⚠️ Notice: This website does not support or facilitate the online sale
          of firecrackers. As per Supreme Court guidelines, customers can submit
          product enquiries through the Estimate page. AK Crackers will contact
          you directly for order confirmation. ⚠️
        </div>
      </div>
      <footer
        className="bg-[#525252] text-[#fefeff] pt-14 pb-6"
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* COMPANY INFO + LOGO */}
            <div>
              {/* Logo */}
              <div className="flex items-center gap-3 mb-5">
                <img
                  src={logo}
                  alt="AK Crackers Logo - Best Crackers Shop in Sivakasi"
                  className="h-14 w-auto"
                  loading="lazy"
                />
                <h2 className="text-2xl font-bold text-[#f26104]">
                  AK Crackers
                </h2>
              </div>

              <p className="text-sm leading-relaxed">
                As per 2018 Supreme Court Order, online sale of firecrackers is
                not permitted. Customers can select products on the Estimate
                Page and submit enquiries. Our team will contact you within 2
                hours to confirm your order.
              </p>

              <p className="text-sm mt-4 leading-relaxed">
                AK Crackers is a licensed and legally compliant fireworks shop
                in Sivakasi, Tamil Nadu, following all explosive safety and
                statutory regulations.
              </p>
            </div>

            {/* QUICK LINKS */}
            <nav aria-label="Footer Navigation">
              <h3 className="text-lg font-semibold bg-[#f26104] text-[#fefeff] inline-block px-5 py-2 rounded-full mb-6">
                Quick Links
              </h3>

              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/" className="hover:text-[#f26104] transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/estimate"
                    className="hover:text-[#f26104] transition"
                  >
                    Estimate
                  </Link>
                </li>
                <li>
                  <Link
                    to="/payment-information"
                    className="hover:text-[#f26104] transition"
                  >
                    Payment Information
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#f26104] transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-[#f26104] transition"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            {/* OFFICE DETAILS */}
            <div>
              <h3 className="text-lg font-semibold bg-[#f26104] text-[#fefeff] inline-block px-5 py-2 rounded-full mb-6">
                Our Office
              </h3>

              <address className="not-italic text-sm space-y-4">
                <p>Sivakasi, Tamil Nadu, India</p>

                <p>
                  Email:{" "}
                  <a
                    href="mailto:akcrackers@gmail.com"
                    className="hover:text-[#f26104] transition"
                  >
                    akcrackers@gmail.com
                  </a>
                </p>

                <p>
                  Phone:{" "}
                  <a
                    href="tel:+919159799823"
                    className="hover:text-[#f26104] transition"
                  >
                    +91 91597 99823
                  </a>
                </p>

                <p>
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/919159799823"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#f26104] transition"
                  >
                    +91 91597 99823
                  </a>
                </p>
              </address>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[#fefeff]/20 mt-12 pt-6 text-center text-sm">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="text-[#f26104] font-semibold">AK Crackers</span>.
              All Rights Reserved. | Fireworks & Crackers Shop in Sivakasi.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

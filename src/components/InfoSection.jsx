import React from "react";

export default function InfoSection() {
  return (
    <section className="w-full bg-[#fefeff] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#525252]">
            Premium Crackers from{" "}
            <span className="text-[#f26104]">AK Crackers</span>
          </h2>
          <p className="mt-4 text-[#525252] max-w-2xl mx-auto">
            We provide high-quality, safe, and affordable fireworks directly
            from Sivakasi. Experience the best variety and pricing this festive
            season.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#f26104]">
            <img
              src="https://images.unsplash.com/photo-1572966347784-1f7e4b2a7f6e?auto=format&fit=crop&w=1000&q=80"
              alt="AK Crackers Premium Fireworks Collection"
              className="w-full h-[300px] md:h-[400px] object-cover"
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#525252] mb-4">
              Why Customers Trust Us
            </h3>

            <ul className="space-y-4 text-[#525252]">
              <li className="flex items-start gap-3">
                <span className="text-[#f26104] font-bold">✔</span>
                Licensed & Safety Compliant Products
              </li>

              <li className="flex items-start gap-3">
                <span className="text-[#f26104] font-bold">✔</span>
                Bulk Orders & Customization Available
              </li>

              <li className="flex items-start gap-3">
                <span className="text-[#f26104] font-bold">✔</span>
                Best Price Direct from Sivakasi
              </li>

              <li className="flex items-start gap-3">
                <span className="text-[#f26104] font-bold">✔</span>
                Wide Variety of Quality Fireworks
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="/estimate"
                className="bg-[#f26104] text-[#fefeff] px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#525252] transition"
              >
                Get Your Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

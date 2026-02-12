import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Boxes, Settings, ShieldCheck, Tag, Award, Grid } from "lucide-react";

const features = [
  { icon: Boxes, title: "Bulk Orders" },
  { icon: Settings, title: "Customization" },
  { icon: ShieldCheck, title: "Safety" },
  { icon: Tag, title: "Best Price" },
  { icon: Award, title: "Best Quality Products" },
  { icon: Grid, title: "Best Variety" },
];

export default function WhyChooseUs() {
  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="bg-[#f26104] py-14">
      {/* SEO important heading */}
      <h2
        className="text-center text-white text-3xl font-bold mb-12"
        data-aos="fade-up"
      >
        Why Choose Us
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                className="
                  bg-white rounded-[45px] py-10
                  flex flex-col items-center
                  shadow-lg hover:-translate-y-2
                  transition
                "
              >
                <Icon size={48} className="text-[#525252] mb-4" />

                <h3 className="text-[#f26104] font-semibold text-lg">
                  {item.title}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

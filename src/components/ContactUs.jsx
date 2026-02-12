export default function ContactUs() {
  return (
    <section
      id="contact"
      className="bg-[#fefeff] py-20 px-6 lg:px-16"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-[#f26104] mb-14">
        Contact Us
      </h2>

      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-10 items-stretch max-w-7xl mx-auto">

        {/* ================= LEFT - FORM ================= */}
        <div className="flex flex-col justify-between bg-white p-8 rounded-2xl shadow-lg h-full">

          <div>
            <h3 className="text-3xl font-bold text-[#525252] mb-3">
              Send Message
            </h3>

            <p className="text-gray-500 mb-6">
              If you get in touch with our office, we'll get back to you quickly.
              Reach us for bulk orders or any enquiry.
            </p>
          </div>

          <form className="space-y-4 flex flex-col h-full">

            <input
              type="text"
              placeholder="Enter Your Name"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#f26104]"
            />

            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#f26104]"
            />

            <input
              type="tel"
              placeholder="Enter Your Mobile Number"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#f26104]"
            />

            <textarea
              rows="4"
              placeholder="Enter Your Message"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#f26104]"
            />

            {/* Button sticks bottom */}
            <button
              type="submit"
              className="mt-auto bg-[#f26104] text-white font-semibold py-3 rounded-full hover:scale-105 transition"
            >
              Submit
            </button>

          </form>
        </div>


        {/* ================= RIGHT - MAP ================= */}
        <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[500px]">

          <iframe
            title="Sivakasi Location"
            src="https://maps.google.com/maps?q=Sivakasi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full"
            loading="lazy"
          ></iframe>

        </div>

      </div>
    </section>
  );
}

import React from "react";
import {
  FaUserAlt,
  FaEnvelope,
  FaPhone,
  FaUsers,
  FaCalendarAlt,
  FaCommentDots,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div
      className="relative bg-cover bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1541674162775-15fd6b6802e3?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-75 "></div>

      <div className="relative z-10 py-16 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6 text-left">
            Let’s Craft Your Perfect Tour
          </h2>

          <p className="text-lg mb-10 text-left max-w-2xl">
            Tell us what you love—food, wine, wildlife, hidden gems—and we’ll
            create a tour shaped around you. No set itineraries, just authentic
            experiences with a trusted local guide.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <FaUserAlt className="absolute left-4 top-3 text-white text-xl" />
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-transparent text-white border-b border-white py-3 px-4 pl-12 focus:outline-none placeholder-gray-300 text-xl rounded-md"
                />
              </div>
              <div className="relative">
                <FaUserAlt className="absolute left-4 top-3 text-white text-xl" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-transparent text-white border-b border-white py-3 px-4 pl-12 focus:outline-none placeholder-gray-300 text-xl rounded-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-3 text-white text-xl" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent text-white border-b border-white py-3 px-4 pl-12 focus:outline-none placeholder-gray-300 text-xl rounded-md"
                />
              </div>
              <div className="relative">
                <FaPhone className="absolute left-4 top-3 text-white text-xl" />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full bg-transparent text-white border-b border-white py-3 px-4 pl-12 focus:outline-none placeholder-gray-300 text-xl rounded-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <FaUsers className="absolute left-4 top-3 text-white text-xl" />
                <input
                  type="number"
                  placeholder="Group Size"
                  className="w-full bg-transparent text-white border-b border-white py-3 px-4 pl-12 focus:outline-none placeholder-gray-300 text-xl rounded-md"
                />
              </div>
              <div className="relative">
                <FaCalendarAlt className="absolute left-4 top-3 text-white text-xl" />
                <input
                  type="date"
                  placeholder="Dates"
                  className="w-full bg-transparent text-white border-b border-white py-3 px-4 pl-12 focus:outline-none placeholder-gray-300 text-xl rounded-md"
                />
              </div>
            </div>

            <div className="relative">
              <FaCalendarAlt className="absolute left-4 top-3 text-white text-xl" />
              <input
                type="number"
                placeholder="Days"
                className="w-full bg-transparent text-white border-b border-white py-3 px-4 pl-12 focus:outline-none placeholder-gray-300 text-xl rounded-md"
              />
            </div>

            <div className="col-span-2 relative">
              <FaCommentDots className="absolute left-4 top-3 text-white text-xl" />
              <textarea
                placeholder="Your Message"
                className="w-full bg-transparent text-white border-b border-white py-3 px-4 pl-12 focus:outline-none placeholder-gray-300 text-xl h-32 rounded-md"
              />
            </div>

            <div className="col-span-2 text-right mt-6">
              <button className="bg-transparent border-2 border-white text-white py-3 px-8 hover:bg-[#c67549] hover:text-white hover:border-[#c67549] transition duration-300 text-xl rounded-md cursor-pointer">
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

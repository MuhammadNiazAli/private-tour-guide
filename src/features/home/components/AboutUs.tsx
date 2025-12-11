import React from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-[#E9E1D8] p-8">
      <div
        className="relative w-full"
        style={{
          height: "800px",
          maxWidth: "1200px",
          margin: "0 auto",
          borderRadius: "30px",
          overflow: "hidden",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1761839257864-c6ccab7238de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About Us Image"
          width={1000}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>

        <div className="absolute top-0 left-0 right-0 bottom-0 p-12 text-white">
          <h1 className="text-5xl font-bold mb-8">Why Choose Us?</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/70 hover:bg-black bg-opacity-60 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              <Image
                src="https://theprivatetourguide.com/wp-content/uploads/2025/05/Capa_1-1.svg"
                alt="Trusted Local Guides"
                width={20}
                height={20}
                className="w-10 h-16 mb-4"
              />
              <h2 className="text-2xl text-white font-semibold mb-2">
                Trusted Local Guides
              </h2>
              <p className="text-white text-[15px]">
                Local knowledge and personal connections delivered with heart,
                providing you with authentic Australian experiences you won’t
                find anywhere else.
              </p>
            </div>

            <div className="bg-black/70 hover:bg-black bg-opacity-60 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              <Image
                src="https://theprivatetourguide.com/wp-content/uploads/2025/05/locations-1.svg"
                alt="Flexible Itineraries"
                width={20}
                height={20}
                className="w-10 h-16 mb-4"
              />
              <h2 className="text-2xl text-white font-semibold mb-2">
                Flexible Itineraries
              </h2>
              <p className="text-white text-[15px]">
                No set schedules—your tour, your way. We adapt to your
                preferences and pace, ensuring your Australian adventure is
                exactly how you imagine it.
              </p>
            </div>

            <div className="bg-black/70 hover:bg-black bg-opacity-60 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              <Image
                src="https://theprivatetourguide.com/wp-content/uploads/2025/05/drinks-1.svg"
                alt="Personalised Experiences"
                width={20}
                height={20}
                className="w-10 h-16 mb-4"
              />
              <h2 className="text-2xl text-white font-semibold mb-2">
                Personalised Experiences
              </h2>
              <p className="text-white text-[15px]">
                From food and wine to wildlife and adventure, we handpick
                wineries to match your tastes and create diverse experiences
                tailored just for you.
              </p>
            </div>

            <div className="bg-black/70 hover:bg-black bg-opacity-60 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              <Image
                src="https://theprivatetourguide.com/wp-content/uploads/2025/05/awards-1.svg"
                alt="Award-Winning Service"
                width={20}
                height={20}
                className="w-10 h-16 mb-4"
              />
              <h2 className="text-2xl text-white font-semibold mb-2">
                Award-Winning Service
              </h2>
              <p className="text-white text-[15px]">
                As a TripAdvisor Hall of Fame member, our family-owned business
                delivers independent service with a warm and personalised touch
                that larger companies can’t match.
              </p>
            </div>

            <div className="bg-black/70 hover:bg-black bg-opacity-60 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              <Image
                src="https://theprivatetourguide.com/wp-content/uploads/2025/05/access-1.svg"
                alt="Insider Access"
                width={20}
                height={20}
                className="w-10 h-16 mb-4"
              />
              <h2 className="text-2xl text-white font-semibold mb-2">
                Insider Access
              </h2>
              <p className="text-white text-[15px]">
                No set schedules—your tour, your way. We adapt to your
                preferences and pace, ensuring your Australian adventure is
                exactly how you imagine it.
              </p>
            </div>

            <div className="bg-black/70 hover:bg-black bg-opacity-60 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
              <Image
                src="https://theprivatetourguide.com/wp-content/uploads/2025/05/car-1.svg"
                alt="Comfort & Seamless Travel"
                width={20}
                height={20}
                className="w-10 h-16 mb-4"
              />
              <h2 className="text-2xl text-white font-semibold mb-2">
                Comfort & Seamless Travel
              </h2>
              <p className="text-white text-[15px]">
                Discover more with our multi-city tours while traveling in style
                in our Mercedes Sprinter, guided by experts who ensure every
                moment is comfortable and memorable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

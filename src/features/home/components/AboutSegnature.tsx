import Image from "next/image";
import React from "react";

const AboutSegnature = () => {
  return (
    <div className="bg-[#E9E1D8] text-black -mt-30">
      <div className="relative">
        <Image
          src="https://plus.unsplash.com/premium_photo-1716866637040-8d7817832298?q=80&w=2121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Tour Image"
          width={1000}
          height={40}
          className="w-full h-[450px] object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-start p-12 text-white">
          <h1 className="text-5xl font-bold mb-2">Signature Tours</h1>
          <p className="text-xl mb-6 w-[600px]">
            Explore exclusive and curated travel experiences that cater to your
            every need. From breathtaking landscapes to luxury getaways, we
            promise an unforgettable adventure.
          </p>
          <button className="px-6 py-3 bg-[#ca7946] hover:bg-[#646254] cursor-pointer text-white rounded-lg">
            Book Your Dream Tour Now
          </button>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-8">
          <p className="text-xl mb-4">
            From our backyard to your bucket list, we offer unforgettable tour
            experiences that are bound to leave a lasting impression. Whether
            you are looking for a private tour, an adventure experience, or a
            luxury trip, we have something for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1740452524420-ff58117424e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Adventure Tour"
              width={1000}
              height={40}
              className="w-full h-56 object-cover mb-4 rounded-md"
            />
            <h2 className="text-2xl font-semibold mb-2">Adventure Seekers</h2>
            <p className="text-lg mb-4">
              Embark on an exhilarating adventure with our guided tours that
              take you off the beaten path.
            </p>
            <button className="px-4 py-2 bg-[#ca7946] hover:bg-[#646254] cursor-pointer text-white rounded-lg">
              Explore Now
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1497302347632-904729bc24aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Private Tours"
              className="w-full h-56 object-cover mb-4 rounded-md"
              width={1000}
              height={40}
            />
            <h2 className="text-2xl font-semibold mb-2">Private Tours</h2>
            <p className="text-lg mb-4">
              Experience the best of luxury and privacy with a bespoke tour
              designed just for you.
            </p>
            <button className="px-4 py-2 bg-[#ca7946] hover:bg-[#646254] cursor-pointer text-white rounded-lg">
              Book Your Tour
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="https://plus.unsplash.com/premium_photo-1708759069677-6d6733ddef2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Luxury Tour"
              width={1000}
              height={40}
              className="w-full h-56 object-cover mb-4 rounded-md"
            />
            <h2 className="text-2xl font-semibold mb-2">Luxury Travel</h2>
            <p className="text-lg mb-4">
              Indulge in a luxurious getaway, with first-class services and
              exclusive experiences.
            </p>
            <button className="px-4 py-2 bg-[#ca7946] hover:bg-[#646254] cursor-pointer text-white rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSegnature;

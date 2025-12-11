/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { RiMailCheckFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [privateToursOpen, setPrivateToursOpen] = useState(false);
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  const destTimer = useRef<NodeJS.Timeout | null>(null);
  const toursTimer = useRef<NodeJS.Timeout | null>(null);

  const images = [
    "https://images.unsplash.com/photo-1482332486572-10fff1bedfbe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1589519160732-57fc498494f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleMouseEnter = (menu: "destinations" | "tours") => {
    if (menu === "destinations") {
      if (destTimer.current) clearTimeout(destTimer.current);
      setDestinationsOpen(true);
    } else {
      if (toursTimer.current) clearTimeout(toursTimer.current);
      setPrivateToursOpen(true);
    }
  };

  const handleMouseLeave = (menu: "destinations" | "tours") => {
    if (menu === "destinations") {
      destTimer.current = setTimeout(() => setDestinationsOpen(false), 100);
    } else {
      toursTimer.current = setTimeout(() => setPrivateToursOpen(false), 200);
    }
  };

  return (
    <div>
      <nav className="bg-white w-[1000px] rounded-[20px] mt-30 absolute left-1/2 transform -translate-x-1/2 -ml-5">
        <div className="max-w-7xl h-20 mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex justify-between h-20 items-center relative">
            <div className="shrink-0">
              <Image
                src="https://theprivatetourguide.com/wp-content/uploads/2025/05/logo.svg"
                alt="Logo"
                width={140}
                height={40}
                className="object-contain ml-1"
              />
            </div>

            <div className="hidden md:flex space-x-14 items-center">
              <div
                className="relative cursor-pointer"
                onMouseEnter={() => handleMouseEnter("destinations")}
                onMouseLeave={() => handleMouseLeave("destinations")}
              >
                <button className="flex items-center text-gray-900 hover:text-[#D4915E] font-medium rounded-full py-2 ml-10">
                  Destinations <FaAngleDown className="ml-1" />
                </button>

                {destinationsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white z-10">
                    {[
                      {
                        name: "Great Ocean Road",
                        link: "/destinations/great-ocean-road",
                      },
                      {
                        name: "Yarra Valley",
                        link: "/destinations/yarra-valley",
                      },
                      { name: "Melbourne", link: "/destinations/melbourne" },
                      { name: "Sydney", link: "/destinations/sydney" },
                      { name: "Tasmania", link: "/destinations/tasmania" },
                      {
                        name: "Australia Packages",
                        link: "/destinations/australia-packages",
                      },
                    ].map((item) => (
                      <a
                        key={item.name}
                        href={item.link}
                        className="block px-4 py-2 whitespace-nowrap text-black hover:text-[#D4915E]"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div
                className="relative cursor-pointer"
                onMouseEnter={() => handleMouseEnter("tours")}
                onMouseLeave={() => handleMouseLeave("tours")}
              >
                <button className="flex items-center text-gray-900 hover:text-[#D4915E] font-medium rounded-full py-2 whitespace-nowrap">
                  Private Tours <FaAngleDown className="ml-1" />
                </button>

                {privateToursOpen && (
                  <div className="absolute top-full left-0 mt-2 w-100 bg-white z-10">
                    {[
                      {
                        name: "1 Day Private Great Ocean Road Tour",
                        link: "/tours/1-day-great-ocean-road",
                      },
                      {
                        name: "1-Day Yarra Valley Private Winery Tour",
                        link: "/tours/yarra-valley-winery",
                      },
                      {
                        name: "2 Day Private Great Ocean Road Tour",
                        link: "/tours/2-day-great-ocean-road",
                      },
                      {
                        name: "3-Day Private Great Ocean Road & Grampians Tour",
                        link: "/tours/3-day-gor-grampians",
                      },
                      {
                        name: "Private Tour Melbourne",
                        link: "/tours/melbourne-private",
                      },
                    ].map((item) => (
                      <a
                        key={item.name}
                        href={item.link}
                        className="block px-4 py-2 whitespace-nowrap text-black hover:text-[#D4915E]"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/about"
                className="text-gray-900 hover:text-[#D4915E] font-medium whitespace-nowrap"
              >
                About
              </a>

              <a
                href="/stories"
                className="text-gray-900 hover:text-[#D4915E] font-medium whitespace-nowrap"
              >
                Stories
              </a>
            </div>

            <div className="flex items-center h-full space-x-4 relative">
              <div className="flex items-center space-x-2 group cursor-pointer h-full px-4">
                <div className="h-6 border-l border-gray-400"></div>
                <RiMailCheckFill className="text-[#646254] text-xl group-hover:text-[#D4915E] transition-colors" />
                <span className="text-[#646254] group-hover:text-[#D4915E] transition-colors whitespace-nowrap">
                  Stay Connected
                </span>
              </div>

              <a
                href="#"
                className="ml-auto h-20 px-10 flex items-center bg-[#c67549] text-white font-semibold hover:bg-[#646254] transition-colors rounded-r-[20px] whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section
        style={{
          backgroundImage: `url(${images[backgroundImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "800px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          textAlign: "left",
          paddingLeft: "40px",
          marginTop: "-160px",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <h2 className="text-7xl font-bold mb-4 ml-20">
          Discover More. <br /> Connect Deeper.
        </h2>
        <p className="text-2xl font-medium ml-20">
          Personalized private tours with Australia’s best local guides.
        </p>
      </section>
    </div>
  );
};

export default Navbar;

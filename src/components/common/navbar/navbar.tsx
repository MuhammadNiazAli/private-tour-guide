"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { RiMailCheckFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import gsap from "gsap";

const Navbar: React.FC = () => {
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [privateToursOpen, setPrivateToursOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const prevScrollY = useRef<number>(0);
  const isNavbarVisible = useRef<boolean>(false);

  const destTimer = useRef<NodeJS.Timeout | null>(null);
  const toursTimer = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (navbarRef.current) {
        if (currentScrollY > prevScrollY.current && currentScrollY > 0) {
          if (!isNavbarVisible.current) {
            gsap.to(navbarRef.current, { y: 0, opacity: 1, duration: 0 });
            isNavbarVisible.current = true;
          }
        } else if (currentScrollY <= prevScrollY.current) {
          gsap.to(navbarRef.current, { y: -100, opacity: 0, duration: 0 });
          isNavbarVisible.current = false;
        }

        if (currentScrollY === 0) {
          gsap.to(navbarRef.current, { y: -100, opacity: 0, duration: 0 });
          isNavbarVisible.current = false;
        }
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    gsap.to(navbarRef.current, { y: -100, opacity: 0, duration: 0 });
    isNavbarVisible.current = false;

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="bg-white shadow-md sticky top-0 z-20"
      style={{ transition: "transform 0.3s, opacity 0.3s" }}
    >
      <div className="max-w-8xl h-15 mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between h-16 items-center relative">
          <div className="shrink-0">
            <Image
              src="https://theprivatetourguide.com/wp-content/uploads/2025/05/logo.svg"
              alt="Logo"
              width={120}
              height={40}
              className="object-contain ml-10"
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
              <span className="text-[#646254] group-hover:text-[#D4915E] transition-colors">
                Stay Connected
              </span>
            </div>

            <a
              href="/contact"
              className="ml-auto h-15 -mt-1 px-10 flex items-center bg-[#c67549] text-white font-semibold hover:bg-[#646254] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  MapPin,
  Camera,
  Car,
  Clock,
  Star,
  Compass,
  Mountain,
  Waves,
} from "lucide-react";
import { RiMailCheckFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";

export default function Oceanmainhero() {
  const router = useRouter();

  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [privateToursOpen, setPrivateToursOpen] = useState(false);

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

  return (
    <div>
      <nav className="bg-white w-[1000px] rounded-[20px] -mt-20 absolute left-1/2 transform -translate-x-1/2 -ml-5 ">
        <div className="max-w-7xl h-20 mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex justify-between h-20 items-center relative">
            <div className="shrink-0">
              <Link href="/">
                <Image
                  src="https://theprivatetourguide.com/wp-content/uploads/2025/05/logo.svg"
                  alt="Logo"
                  width={140}
                  height={40}
                  className="object-contain ml-1"
                />
              </Link>
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
                      <Link
                        key={item.name}
                        href={item.link}
                        className="block px-4 py-2 whitespace-nowrap text-black hover:text-[#D4915E]"
                      >
                        {item.name}
                      </Link>
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
                      <Link
                        key={item.name}
                        href={item.link}
                        className="block px-4 py-2 whitespace-nowrap text-black hover:text-[#D4915E]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="text-gray-900 hover:text-[#D4915E] font-medium whitespace-nowrap"
              >
                About
              </Link>
              <Link
                href="/stories"
                className="text-gray-900 hover:text-[#D4915E] font-medium whitespace-nowrap"
              >
                Stories
              </Link>
            </div>

            <div className="flex items-center h-full space-x-4 relative">
              <div className="flex items-center space-x-2 group cursor-pointer h-full px-4">
                <div className="h-6 border-l border-gray-400"></div>
                <RiMailCheckFill className="text-[#646254] text-xl group-hover:text-[#D4915E] transition-colors" />
                <span className="text-[#646254] group-hover:text-[#D4915E] transition-colors whitespace-nowrap">
                  Stay Connected
                </span>
              </div>

              <Link
                href="/contact"
                className="ml-auto h-20 px-10 flex items-center bg-[#c67549] text-white font-semibold hover:bg-[#646254] transition-colors rounded-r-[20px] whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 mt-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Great Ocean Road
          </h1>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Discover one of Australia’s most iconic coastal journeys — a perfect
            blend of breathtaking ocean views, dramatic cliffs, lush
            rainforests, golden beaches, and world-famous landmarks such as the
            Twelve Apostles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1550693445-737398ed6775?q=80&w=1964&auto=format&fit=crop"
              alt="Great Ocean Road 1"
              width={1200}
              height={800}
              className="w-full h-[450px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div>
            <Image
              src="https://images.unsplash.com/photo-1717700299591-470e043edc9c?q=80&w=1924&auto=format&fit=crop"
              alt="Great Ocean Road 2"
              width={1200}
              height={800}
              className="w-full h-[450px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: Waves,
              title: "Stunning Coastline",
              desc: "Experience endless turquoise waters, rugged cliffs, and panoramic views across the Southern Ocean.",
            },
            {
              icon: Mountain,
              title: "Natural Wonders",
              desc: "See the iconic Twelve Apostles carved naturally from limestone over millions of years.",
            },
            {
              icon: Camera,
              title: "Perfect Photo Spots",
              desc: "Capture stunning ocean cliffs, beaches, and rock formations.",
            },
            {
              icon: Compass,
              title: "Adventure & Exploration",
              desc: "Walk rainforest trails, explore hidden beaches, and visit scenic coastal towns.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-md hover:shadow-xl transition-all p-6 bg-white border border-gray-100 flex flex-col items-center text-center gap-4"
            >
              <item.icon className="w-12 h-12 text-amber-700" />
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10 mb-20 border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center">
            Tour Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Clock className="text-amber-700 w-7 h-7" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Duration
                  </h4>
                  <p className="text-gray-600">
                    A full-day adventure lasting about 12 hours, covering major
                    scenic highlights.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Car className="text-amber-700 w-7 h-7" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Comfortable Transport
                  </h4>
                  <p className="text-gray-600">
                    Travel in a modern air-conditioned tourist coach with
                    panoramic windows.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-amber-700 w-7 h-7" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Major Stops
                  </h4>
                  <p className="text-gray-600">
                    Twelve Apostles, Loch Ard Gorge, Apollo Bay, Otway
                    Rainforest, Memorial Arch, and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Star className="text-amber-700 w-7 h-7" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Top Experiences
                  </h4>
                  <p className="text-gray-600">
                    Rainforest walks, ocean lookouts, wildlife spotting —
                    koalas, native birds, and more.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Compass className="text-amber-700 w-7 h-7" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Easy & Relaxing
                  </h4>
                  <p className="text-gray-600">
                    Ideal for families, couples, solo travellers — no hiking
                    experience needed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Camera className="text-amber-700 w-7 h-7" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Photography Heaven
                  </h4>
                  <p className="text-gray-600">
                    Breathtaking views — cliffs, beaches, forests, and
                    golden-hour scenery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => router.push("/tours/1-day-great-ocean-road")}
            className="bg-amber-700 text-white text-lg px-8 py-4 rounded-2xl shadow-xl hover:bg-amber-800 transition-all duration-300 font-semibold cursor-pointer"
          >
            Explore the 1-Day Great Ocean Road Tour
          </button>
        </div>
      </section>
    </div>
  );
}

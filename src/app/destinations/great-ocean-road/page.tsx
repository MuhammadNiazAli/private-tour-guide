/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
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

export default function Page() {
  const router = useRouter();

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Great Ocean Road
        </h1>

        <p className="text-gray-700 text-lg md:text-xl max-w-8xl mx-auto leading-relaxed">
          Discover one of Australia’s most iconic coastal journeys — a perfect
          blend of breathtaking ocean views, dramatic cliffs, lush rainforests,
          golden beaches, and world-famous landmarks such as the Twelve
          Apostles. Whether you're a nature lover, adventure seeker, or
          photography enthusiast, this scenic drive promises unforgettable
          memories at every curve.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1550693445-737398ed6775?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Great Ocean Road 1"
            width={1200}
            height={800}
            className="w-full h-[450px] object-cover rounded-2xl shadow-xl"
          />
        </div>

        <div>
          <Image
            src="https://images.unsplash.com/photo-1717700299591-470e043edc9c?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            desc: "Experience endless turquoise waters, rugged cliffs, and panoramic views stretching across the Southern Ocean.",
          },
          {
            icon: Mountain,
            title: "Natural Wonders",
            desc: "Get up close with the majestic Twelve Apostles, carved naturally from limestone over millions of years.",
          },
          {
            icon: Camera,
            title: "Perfect Photo Spots",
            desc: "Capture unforgettable scenes including cliff edges, ocean lookouts, serene beaches, and rock formations.",
          },
          {
            icon: Compass,
            title: "Adventure & Exploration",
            desc: "Walk through rainforest trails, explore hidden beaches, and visit charming coastal towns along the journey.",
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
                  A full-day adventure lasting approximately 12 hours, covering
                  major scenic highlights and hidden gems.
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
                  panoramic windows for maximum viewing pleasure.
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
                  Twelve Apostles, Loch Ard Gorge, Apollo Bay, Otway Rainforest,
                  Great Ocean Road Memorial Arch, and more.
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
                  Walk through lush rainforest trails, witness iconic ocean
                  lookouts, and spot wildlife like koalas and native birds.
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
                  Ideal for families, couples, solo travellers, and first-time
                  explorers. No prior hiking experience needed.
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
                  Every stop offers postcard-worthy frames — sunrise cliffs,
                  coastal rock formations, lush green forests, and more.
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
  );
}

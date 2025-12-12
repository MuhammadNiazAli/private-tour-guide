"use client";

import React from "react";
import Image from "next/image";
import { Clock, Star, Flame } from "lucide-react";

interface TourItem {
  title: string;
  image: string;
  duration: string;
  price: string;
  rating: number;
  reviews: number;
  highlight?: boolean;
  features: string[];
}

const tours: TourItem[] = [
  {
    title: "Great Ocean Road Classic Day Tour",
    image:
      "https://images.unsplash.com/photo-1674795513715-8642e49cc4b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "1 Day",
    price: "$89",
    rating: 4.8,
    reviews: 1320,
    highlight: true,
    features: [
      "Twelve Apostles",
      "Loch Ard Gorge",
      "Coastal Lookouts",
      "Comfortable Bus Ride",
    ],
  },
  {
    title: "Great Ocean Road Sunset Experience",
    image:
      "https://images.unsplash.com/photo-1731006679896-29a2df35129b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "1 Day",
    price: "$99",
    rating: 4.9,
    reviews: 860,
    features: [
      "Sunset at Twelve Apostles",
      "Evening Photography",
      "Relaxed Itinerary",
    ],
  },
  {
    title: "2-Day Great Ocean Road & Rainforest Adventure",
    image:
      "https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "2 Days",
    price: "$179",
    rating: 4.9,
    reviews: 540,
    features: [
      "Overnight Stay",
      "Otway Rainforest Walks",
      "Wildlife Spotting",
      "Extended Scenic Stops",
    ],
  },
];

const GreatOceanRelatedTours: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-14">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        Related Great Ocean Road Tours
      </h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14 text-lg">
        Explore other popular tours that offer amazing coastal views, scenic drives, 
        and iconic landmarks along the Great Ocean Road. Choose the perfect experience 
        for your travel style.
      </p>

      {/* Tour Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {tours.map((tour, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="relative w-full h-56">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover"
              />

              {tour.highlight && (
                <span className="absolute top-3 left-3 bg-amber-700 text-white text-xs font-semibold py-1 px-3 rounded-full flex items-center gap-1">
                  <Flame className="w-4 h-4" />
                  Most Popular
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-xl font-bold text-gray-900">{tour.title}</h3>

              {/* Rating */}
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Star className="w-5 h-5 text-amber-600" />
                <span className="font-semibold">{tour.rating}</span>
                <span className="text-gray-500">({tour.reviews} reviews)</span>
              </div>

              {/* Duration + Price */}
              <div className="flex items-center justify-between mt-1">
                <p className="flex items-center gap-1 text-gray-700">
                  <Clock className="w-4 h-4 text-amber-700" />
                  {tour.duration}
                </p>
                <p className="text-lg font-bold text-amber-700">{tour.price}</p>
              </div>

              {/* Features */}
              <ul className="text-gray-700 text-sm space-y-2 mt-2">
                {tour.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-amber-700 font-bold mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="mt-4 w-full bg-amber-700 text-white font-semibold py-2 rounded-xl hover:bg-amber-800 transition-all">
                View Tour Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GreatOceanRelatedTours;

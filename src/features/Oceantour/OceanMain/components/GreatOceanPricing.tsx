"use client";

import React from "react";

import Link from "next/link";

interface PricingOption {
  title: string;
  price: string;
  duration: string;
  features: string[];
  recommended?: boolean;
  link: string;
}

const pricingOptions: PricingOption[] = [
  {
    title: "1-Day Great Ocean Road Tour",
    price: "$89",
    duration: "1 Day",
    features: [
      "Twelve Apostles",
      "Loch Ard Gorge",
      "Apollo Bay",
      "Comfortable Bus",
    ],
    recommended: true,
    link: "/tours/1-day-great-ocean-road",
  },
  {
    title: "2-Day Rainforest Adventure",
    price: "$179",
    duration: "2 Days",
    features: [
      "Overnight Stay",
      "Otway Rainforest",
      "Wildlife Spotting",
      "Extended Scenic Stops",
    ],
    link: "/tours/2-day-great-ocean-road",
  },
  {
    title: "3-Day Great Ocean & Grampians Tour",
    price: "$259",
    duration: "3 Days",
    features: [
      "All Major Stops",
      "Scenic Drives",
      "Guided Walks",
      "Luxury Transport",
    ],
    link: "/tours/3-day-gor-grampians",
  },
];

const GreatOceanPricing: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-14">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        Tour Pricing Options
      </h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14 text-lg">
        Choose the tour package that best fits your schedule and interests.
        <span className="font-semibold text-amber-700"> Recommended tours are highlighted.</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingOptions.map((option, i) => (
          <div
            key={i}
            className={`bg-white border ${
              option.recommended ? "border-amber-500" : "border-gray-200"
            } rounded-2xl shadow-md hover:shadow-xl transition-all p-6 flex flex-col`}
          >
            {option.recommended && (
              <span className="bg-amber-700 text-white text-sm font-semibold px-3 py-1 rounded-full w-max mb-4">
                Recommended
              </span>
            )}

            <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>

            <p className="text-gray-700 font-semibold mb-4">{option.duration}</p>

            <p className="text-3xl font-bold text-amber-700 mb-4">{option.price}</p>

            <ul className="text-gray-600 text-sm mb-6 space-y-2">
              {option.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href={option.link}
              className="mt-auto text-center bg-amber-700 text-white font-semibold py-3 rounded-xl hover:bg-amber-800 transition-all"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GreatOceanPricing;

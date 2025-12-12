"use client";

import React from "react";
import { Clock, Car, MapPin, Star, Compass, Camera } from "lucide-react";

interface TourInfoItem {
  icon: React.ElementType;
  title: string;
  description: string;
  important?: boolean;
}

const tourInfo: TourInfoItem[] = [
  {
    icon: Clock,
    title: "Duration",
    description:
      "A full-day adventure lasting about 12 hours, covering the most scenic highlights along the Great Ocean Road.",
    important: true,
  },
  {
    icon: Car,
    title: "Comfortable Transport",
    description:
      "Travel in a modern, air-conditioned tourist coach with panoramic windows for maximum sightseeing comfort.",
  },
  {
    icon: MapPin,
    title: "Major Stops",
    description:
      "Visit iconic landmarks like the Twelve Apostles, Loch Ard Gorge, Apollo Bay, Otway Rainforest, and Memorial Arch.",
    important: true,
  },
  {
    icon: Star,
    title: "Top Experiences",
    description:
      "Rainforest walks, ocean lookouts, and wildlife spotting including koalas, native birds, and kangaroos.",
  },
  {
    icon: Compass,
    title: "Easy & Relaxing",
    description:
      "Ideal for families, couples, and solo travellers – no hiking experience is needed to enjoy this journey.",
  },
  {
    icon: Camera,
    title: "Photography Heaven",
    description:
      "Capture stunning ocean cliffs, beaches, forests, and golden-hour scenery, perfect for DSLR and drone photography.",
    important: true,
  },
];

const GreatOceanTourInfo: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-14">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        Tour Information
      </h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14 text-lg">
        Everything you need to know about this unforgettable tour, from the duration and transport to the top highlights and experiences.
        <span className="font-semibold text-amber-700"> Important points are marked for your convenience.</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {tourInfo.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all"
          >
            <item.icon className="w-8 h-8 text-amber-700 shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                {item.title}
                {item.important && (
                  <span className="text-amber-700 font-bold text-base">★</span>
                )}
              </h3>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GreatOceanTourInfo;

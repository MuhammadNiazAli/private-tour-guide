"use client";

import React from "react";
import { Car, Mountain, Camera } from "lucide-react";

interface ItineraryDay {
  day: string;
  icon: React.ElementType;
  title: string;
  description: string;
  highlights: {
    point: string;
    important?: boolean;
  }[];
}

const itinerary: ItineraryDay[] = [
  {
    day: "Day 1",
    icon: Car,
    title: "Melbourne → Torquay → Lorne",
    description:
      "Begin your Great Ocean Road journey with the classic coastal route, surf beaches, and relaxing ocean viewpoints.",
    highlights: [
      { point: "Start from Melbourne early morning", important: true },
      { point: "Visit Torquay – surfing capital of Australia" },
      {
        point: "Stop at Bells Beach lookout (famous surfing spot)",
        important: true,
      },
      { point: "Drive through Anglesea & Aireys Inlet" },
      {
        point: "Memorial Arch – iconic Great Ocean Road sign",
        important: true,
      },
      { point: "Evening at Lorne – beachfront cafés & sunset views" },
    ],
  },
  {
    day: "Day 2",
    icon: Mountain,
    title: "Lorne → Apollo Bay → Twelve Apostles",
    description:
      "Explore lush rainforests, waterfalls, and one of the most iconic coastlines in the world.",
    highlights: [
      {
        point: "Erskine Falls – beautiful rainforest waterfall",
        important: true,
      },
      { point: "Drive to Apollo Bay – scenic stretch of coastline" },
      { point: "Lunch at Apollo Bay local seafood spots" },
      { point: "Great Otway National Park – rainforest & wildlife" },
      { point: "Cape Otway Lighthouse stopover" },
      { point: "Reach the Twelve Apostles before sunset", important: true },
      { point: "Gibson Steps – walk down to the beach" },
    ],
  },
  {
    day: "Day 3",
    icon: Camera,
    title: "Twelve Apostles → Port Campbell → Melbourne",
    description:
      "End your journey with dramatic cliffs, historical sites, and world-famous viewpoints.",
    highlights: [
      { point: "Sunrise at the Twelve Apostles", important: true },
      {
        point: "Loch Ard Gorge – shipwreck history & viewpoints",
        important: true,
      },
      { point: "London Bridge rock formation" },
      { point: "The Grotto – must-see natural rock pool" },
      { point: "Explore Port Campbell coastal town" },
      { point: "Return drive to Melbourne (comfortable highway route)" },
    ],
  },
];

const GreatOceanItinerary: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-14">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        3-Day Great Ocean Road Itinerary
      </h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14 text-lg">
        A perfectly balanced{" "}
        <span className="font-semibold text-amber-700">3-day adventure</span>{" "}
        featuring scenic drives, iconic landmarks, rainforest walks, and
        breathtaking coastal views. Important spots are marked with a{" "}
        <span className="font-bold text-amber-700">*</span> so you don’t miss
        anything.
      </p>

      <div className="space-y-10">
        {itinerary.map((day, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <day.icon className="w-12 h-12 text-amber-700" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{day.day}</h3>
                <p className="text-gray-700 font-medium">{day.title}</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              {day.description}
            </p>

            <ul className="space-y-3 pl-2">
              {day.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-gray-700 text-sm"
                >
                  <span className="font-bold text-amber-700 mr-2">
                    {item.important ? "*" : "•"}
                  </span>
                  {item.point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GreatOceanItinerary;

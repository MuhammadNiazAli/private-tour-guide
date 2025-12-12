"use client";

import React from "react";
import { Sun, Umbrella, MapPin, Camera, Clock, Shield } from "lucide-react";

interface TravelTip {
  icon: React.ElementType;
  title: string;
  description: string;
  important?: boolean;
}

const travelTips: TravelTip[] = [
  {
    icon: Sun,
    title: "Best Time to Visit",
    description:
      "The Great Ocean Road is beautiful all year round. Summer offers bright ocean views, Winter shows dramatic waves, Spring blooms wildflowers, and Autumn is calm and quiet.",
    important: true,
  },
  {
    icon: Umbrella,
    title: "Weather Preparedness",
    description:
      "Bring a light jacket and be prepared for sudden weather changes, as coastal areas can get windy and rainy.",
  },
  {
    icon: MapPin,
    title: "Navigation & Maps",
    description:
      "Use GPS or offline maps. Some remote stops along the route may have limited mobile coverage.",
  },
  {
    icon: Camera,
    title: "Photography Tips",
    description:
      "Golden hour provides perfect lighting for coastal cliffs and beaches. Carry a tripod if possible for long exposures.",
  },
  {
    icon: Clock,
    title: "Start Early",
    description:
      "Begin your journey in the morning to maximize sightseeing and avoid crowds at popular stops like the Twelve Apostles.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Follow marked paths, respect wildlife, and avoid climbing rocks near cliffs or strong ocean currents.",
    important: true,
  },
];

const GreatOceanTravelTips: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-14">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        Travel Tips for the Great Ocean Road
      </h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14 text-lg">
        Make the most of your trip with these practical and essential travel tips.
        <span className="font-semibold text-amber-700"> Important points are highlighted with a star.</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {travelTips.map((tip, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all"
          >
            <tip.icon className="w-8 h-8 text-amber-700 shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                {tip.title}
                {tip.important && (
                  <span className="text-amber-700 font-bold text-base">★</span>
                )}
              </h3>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GreatOceanTravelTips;

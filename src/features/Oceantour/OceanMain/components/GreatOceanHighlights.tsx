"use client";

import React from "react";
import {
  Camera,
  Compass,
  TreePine,
  Sun,
  Car,
  MapPin,
  Binoculars,
  Train,
  ShipWheel,
  Leaf,
  PawPrint,
  BadgeCheck,
} from "lucide-react";

interface HighlightItem {
  icon: React.ElementType;
  title: string;
  description: string;
  points: string[];
  important?: boolean;
}

const highlights: HighlightItem[] = [
  {
    icon: TreePine,
    title: "Lush Rainforests",
    description:
      "Walk through ancient rainforests filled with wildlife, towering trees, and calming nature sounds.",
    important: true,
    points: [
      "Great Otway National Park",
      "Massive fern gullies",
      "Waterfalls & walking tracks",
      "Koalas & native birds",
    ],
  },
  {
    icon: Camera,
    title: "Photography Heaven",
    description:
      "Capture extraordinary landscapes and breathtaking natural beauty.",
    points: [
      "Sunrise & sunset views",
      "Cliff-edge photography",
      "Dramatic ocean colors",
      "Perfect for drone shots (where allowed)",
    ],
  },
  {
    icon: Compass,
    title: "Adventure & Exploration",
    description:
      "From coastal trails to rainforest walks, explore the best of both worlds.",
    points: [
      "Hidden beaches",
      "Scenic walking paths",
      "Local coastal towns",
      "Wildlife encounters",
    ],
  },
  {
    icon: Car,
    title: "Smooth & Scenic Drives",
    description:
      "A world-famous road trip with carefully crafted viewpoints and stops.",
    points: [
      "Memorial Arch stop",
      "Curved ocean-side highways",
      "Safe & comfortable routes",
      "Plenty of rest & photo stops",
    ],
  },
  {
    icon: MapPin,
    title: "Historic Locations",
    description: "Discover stories that shaped the coastline’s identity.",
    points: [
      "Shipwreck Coast history",
      "Loch Ard survival tale",
      "Cape Otway lighthouse",
      "Old coastal settlements",
    ],
  },
  {
    icon: Sun,
    title: "All-Year Travel Destination",
    description:
      "Perfect to visit in any season with unique charm throughout the year.",
    important: true,
    points: [
      "Summer – bright ocean views",
      "Winter – dramatic waves",
      "Spring – wildflowers everywhere",
      "Autumn – calm & quiet atmosphere",
    ],
  },

  {
    icon: Binoculars,
    title: "Wildlife Spotting",
    description:
      "A paradise for nature lovers — experience unique Australian wildlife in their natural habitat.",
    important: true,
    points: [
      "Koalas resting in eucalyptus trees",
      "Kangaroos in open landscapes",
      "Rare bird species",
      "Whale spotting during migration season",
    ],
  },

  {
    icon: Leaf,
    title: "Eco-Friendly Experience",
    description:
      "Enjoy sustainable travel with a focus on preserving nature and supporting local communities.",
    points: [
      "Environmentally responsible routes",
      "Respect for natural habitats",
      "Eco-friendly rest stops",
      "Support for local businesses",
    ],
  },

  {
    icon: ShipWheel,
    title: "Shipwreck Legends",
    description:
      "Discover the haunting and fascinating stories behind Australia’s famous Shipwreck Coast.",
    points: [
      "Over 600 shipwreck stories",
      "Loch Ard Gorge survivors' tale",
      "Historic maritime routes",
      "Old sailor myths & legends",
    ],
  },

  {
    icon: Train,
    title: "Easy Access from Melbourne",
    description:
      "Convenient travel routes make the Great Ocean Road perfect for day trips and weekend escapes.",
    points: [
      "Only 90 minutes from Melbourne",
      "Smooth highways & scenic roads",
      "Accessible for families & solo travelers",
      "Multiple pick-up options",
    ],
  },

  {
    icon: PawPrint,
    title: "Nature & Wildlife Protection Zones",
    description:
      "Explore areas dedicated to protecting Australia’s rare flora and fauna.",
    points: [
      "Protected wildlife habitats",
      "Rare plant species",
      "Guided nature spots",
      "Zero-disturbance principles",
    ],
  },

  {
    icon: BadgeCheck,
    title: "Award-Winning Destination",
    description:
      "Recognised globally as one of the most beautiful coastal road trips.",
    important: true,
    points: [
      "Featured in National Geographic",
      "Top-rated on TripAdvisor",
      "UNESCO heritage significance",
      "Traveller’s Choice Award",
    ],
  },
];

const GreatOceanHighlights: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        Highlights of the Great Ocean Road
      </h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14 text-lg">
        Experience the very best of Australia’s most scenic coastal adventure —
        filled with{" "}
        <span className="font-semibold text-amber-700">
          natural wonders, wildlife encounters, historic landmarks,
        </span>{" "}
        and unforgettable moments across every kilometer.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all p-8 flex flex-col gap-4"
          >
            <item.icon className="w-12 h-12 text-amber-700" />

            <h3 className="text-xl font-bold text-gray-900">
              {item.title}
              {item.important && (
                <span className="ml-2 text-amber-700 text-base font-semibold">
                  ★
                </span>
              )}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>

            <ul className="text-gray-700 text-sm mt-3 space-y-2">
              {item.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-700 font-bold mr-2">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GreatOceanHighlights;

"use client";

import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

interface Review {
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar?: string;
  highlight?: boolean;
}

const reviews: Review[] = [
  {
    name: "Emily Watson",
    location: "Melbourne, Australia",
    rating: 5,
    comment:
      "An unforgettable experience! The scenery was breathtaking and the tour guide was extremely knowledgeable. Highly recommended!",
    highlight: true,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "James Lee",
    location: "Sydney, Australia",
    rating: 4.8,
    comment:
      "Loved every moment of the Great Ocean Road tour. Stops were well planned and the sunset at the Twelve Apostles was magical.",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Sophia Turner",
    location: "Brisbane, Australia",
    rating: 4.9,
    comment:
      "Perfect mix of adventure and relaxation. The bus was comfortable, and the itinerary covered all must-see spots. Will do again!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const GreatOceanReviews: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-14 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        Traveler Reviews
      </h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14 text-lg">
        Hear from travelers who have experienced the Great Ocean Road tour. 
        <span className="font-semibold text-amber-700"> Top reviews are highlighted.</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews.map((review, i) => (
          <div
            key={i}
            className={`bg-white p-6 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all ${
              review.highlight ? "border-amber-400" : ""
            }`}
          >
            {/* Avatar */}
            <div className="flex items-center gap-4 mb-4">
              {review.avatar && (
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                <p className="text-gray-500 text-sm">{review.location}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-3">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  className={`w-5 h-5 ${
                    idx < Math.round(review.rating) ? "text-amber-600" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-700 font-medium">{review.rating}</span>
            </div>

            {/* Comment */}
            <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GreatOceanReviews;

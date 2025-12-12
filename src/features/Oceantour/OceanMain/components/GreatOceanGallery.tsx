"use client";

import React from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1709809996274-8b0ba8527298?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Great Ocean Road - Photo 1",
  },
  {
    src: "https://images.unsplash.com/photo-1661102694389-e5620b167ba9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Great Ocean Road - Photo 2",
  },
  {
    src: "https://images.unsplash.com/photo-1532222823006-2415c51af07f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Ocean Waves",
  },
  {
    src: "https://images.unsplash.com/photo-1674795514050-b1b9f4a5987f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Coastal Cliff Views",
  },
];

const GreatOceanGallery: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
        Photo Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 
                     (max-width: 1200px) 50vw,
                     25vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GreatOceanGallery;

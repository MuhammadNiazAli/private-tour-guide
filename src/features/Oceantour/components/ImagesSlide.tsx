/* eslint-disable react-hooks/immutability */
"use client"; 

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";


const images = [
  "https://images.unsplash.com/photo-1565619633668-cabd457602d2?auto=format&fit=crop&w=1920&q=100",
  "https://images.unsplash.com/photo-1549637403-e2ce7a889fb7?auto=format&fit=crop&w=1920&q=100",
  "https://images.unsplash.com/photo-1581350271815-6863eb3103dd?auto=format&fit=crop&w=1920&q=100",
  "https://images.unsplash.com/photo-1648832329056-5e7f84d0d361?auto=format&fit=crop&w=1920&q=100",
  "https://images.unsplash.com/photo-1627360647162-87f06cb16d73?auto=format&fit=crop&w=1920&q=100",
];

const ImagesSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden shadow-xl">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 0, scale: 1 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

  
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-4 rounded-full shadow-lg hover:bg-black/60 transition-transform hover:scale-110 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-4 rounded-full shadow-lg hover:bg-black/60 transition-transform hover:scale-110 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>


      <div className="absolute bottom-4 w-full flex justify-center gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all rounded-full cursor-pointer ${
              idx === currentIndex ? "bg-white w-4 h-4" : "bg-white/30 w-3 h-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesSlide;

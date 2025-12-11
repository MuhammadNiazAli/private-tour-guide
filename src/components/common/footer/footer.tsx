import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-20 pb-10 px-6 md:px-16 rounded-bl-[50px] rounded-br-[50px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-14">
       
        <div>
          <div className="relative w-44 h-16 mb-6">
            <Image
              src="https://theprivatetourguide.com/wp-content/uploads/2025/05/logo-white.svg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-gray-300 leading-relaxed text-sm max-w-sm">
            Discover Australia with personalized luxury tours crafted to perfection. Explore breathtaking landscapes, iconic destinations, and tailored private journeys.
          </p>

          <h4 className="text-lg font-semibold mt-8 mb-4">Follow Us</h4>
          <div className="flex items-center gap-4">
            {[FaFacebookF, FaInstagram, FaYoutube, FaTwitter].map((Icon, i) => (
              <div
                key={i}
                className="p-3 bg-white/10 rounded-full hover:bg-[#c67549] transition duration-300 cursor-pointer"
              >
                <Icon className="text-white text-lg" />
              </div>
            ))}
          </div>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="hover:text-[#c67549] transition cursor-pointer">Home</li>
            <li className="hover:text-[#c67549] transition cursor-pointer">Destinations</li>
            <li className="hover:text-[#c67549] transition cursor-pointer">Luxury Tours</li>
            <li className="hover:text-[#c67549] transition cursor-pointer">Private Guide</li>
            <li className="hover:text-[#c67549] transition cursor-pointer">Contact</li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-xl font-semibold mb-5">Popular Tours</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="hover:text-[#c67549] transition cursor-pointer">Great Ocean Road</li>
            <li className="hover:text-[#c67549] transition cursor-pointer">Sydney Explorer</li>
            <li className="hover:text-[#c67549] transition cursor-pointer">Melbourne City Tour</li>
            <li className="hover:text-[#c67549] transition cursor-pointer">Yarra Valley Wine Tour</li>
            <li className="hover:text-[#c67549] transition cursor-pointer">Tasmania Adventure</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold mb-5">Contact Us</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li>
              <span className="block font-medium text-white mb-1">Call Us</span>
              +61 400 054 015
            </li>
            <li>
              <span className="block font-medium text-white mb-1">Email Us</span>
              contact@theprivatetourguide.com
            </li>
            <li>
              <span className="block font-medium text-white mb-1">Location</span>
              Melbourne, Australia
            </li>
          </ul>
        </div>
      </div>

    
      <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400 text-sm flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
        <span>Developed by Creative Approach</span>
        <span className="hidden md:block">|</span>
        <span>© 2025 The Private Tour Guide All rights reserved.</span>
        <span className="hidden md:block">|</span>
        <span className="cursor-pointer hover:text-white transition">
          Privacy Policy
        </span>
        <span className="hidden md:block">|</span>
        <span className="cursor-pointer hover:text-white transition">
          Terms & Conditions
        </span>
      </div>
    </footer>
  );
}

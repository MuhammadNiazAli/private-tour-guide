/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";

const destinations = [
  {
    img: "https://images.unsplash.com/photo-1535796726072-82d5a7395525?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Great Ocean Road",
    desc: "Experience Victoria’s iconic Great Ocean Road: rugged cliffs, lush rainforest canopies, and coastal vistas. Perfect for nature lovers, road trip enthusiasts, and photographers. Discover hidden gems along the route like the Twelve Apostles, Loch Ard Gorge, and more.",
    location: "Victoria, Australia",
    history:
      "This road is rich in history, originally constructed to provide work during the Great Depression and offering breathtaking views of the Southern Ocean.",
    link: "#great-ocean-road",
  },
  {
    img: "https://images.unsplash.com/photo-1605492071176-08c38459e063?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Yarra Valley",
    desc: "Discover Yarra Valley's cool-climate wines, rolling hills, and country charm. Explore vineyards, gourmet food spots, and charming towns like Healesville and Warburton. Whether you're a wine connoisseur or just looking for a peaceful escape, this destination has it all.",
    location: "Victoria, Australia",
    history:
      "Yarra Valley is Australia's leading wine region, known for its Pinot Noir and Chardonnay wines, with a rich heritage dating back to the 19th century.",
    link: "#yarra-valley",
  },
  {
    img: "https://images.unsplash.com/photo-1545044846-351ba102b6d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Melbourne",
    desc: "A vibrant mix of cultures, Melbourne offers local stories, delicious global flavours, and engaging city life. Immerse yourself in its dynamic atmosphere and artistic spirit. Visit iconic spots like Federation Square and the Royal Botanic Gardens.",
    location: "Victoria, Australia",
    history:
      "Melbourne is known for its blend of modern culture and European influences, offering a cosmopolitan lifestyle with a mix of stunning architecture and green spaces.",
    link: "#melbourne",
  },
  {
    img: "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Sydney",
    desc: "Discover the iconic Sydney Opera House, beautiful harbours, and rich cultural stories that only locals can share. A must-see destination for first-time and returning travellers. Sydney offers a vibrant arts scene and stunning views from Bondi Beach.",
    location: "New South Wales, Australia",
    history:
      "Sydney, Australia's largest city, is known for its harbor, the Sydney Opera House, and the Sydney Harbour Bridge. It's also home to diverse cultures and world-class restaurants.",
    link: "#sydney",
  },
  {
    img: "https://images.unsplash.com/photo-1678617673218-6509a2910cfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tasmania",
    desc: "Reconnect with nature in Tasmania, a place where you can slow down, breathe deeply, and immerse yourself in the breathtaking scenery and pristine wilderness. Known for its natural reserves, stunning beaches, and rich wildlife.",
    location: "Tasmania, Australia",
    history:
      "Tasmania offers a secluded retreat with its untouched wilderness and is home to some of Australia's most extraordinary flora and fauna. The island has a strong Aboriginal heritage.",
    link: "#tasmania",
  },
  {
    img: "https://images.unsplash.com/photo-1605933353319-31ea576f2d24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Australia Packages",
    desc: "Explore the best of Australia with our curated travel packages. From urban escapes to remote adventures, we have a seamless and stylish way to experience Australia. Tailored experiences to match your preferences, from luxury to adventure.",
    location: "Australia",
    history:
      "Australia packages offer well-rounded itineraries that cover iconic destinations and hidden gems alike. Whether you're after luxury experiences or off-the-beaten-path exploration, we've got you covered.",
    link: "#australia-packages",
  },
];

export default function Destinations() {
  return (
    <main className="w-full bg-[#E9E1D8] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <header>
          <h1 className="text-5xl font-bold w-[600px] text-black">
            Explore Australia's Iconic and Hidden Destinations
          </h1>
          <p className="mt-3 text-xl w-[550px] text-gray-700">
            Discover breathtaking landscapes, historic towns, and unforgettable
            adventures. Your next vacation awaits.
          </p>
        </header>

        <div className="mt-16 space-y-24">
          {destinations.map((item, i) => (
            <section
              key={i}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              itemScope
              itemType="http://schema.org/TouristDestination"
            >
              <div
                className="relative w-full md:w-1/2 h-[380px] rounded-3xl overflow-hidden shadow-xl group"
                itemProp="image"
              >
                <Image
                  src={item.img}
                  alt={`Beautiful view of ${item.title}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-500" />
              </div>

              <div className="w-full md:w-1/2">
                <h3
                  className="text-4xl font-semibold text-black mb-4"
                  itemProp="name"
                >
                  {item.title}
                </h3>
                <p
                  className="text-lg text-gray-700 mb-6 max-w-md"
                  itemProp="description"
                >
                  {item.desc}
                </p>
                <p className="text-gray-500 mb-4" itemProp="location">
                  <strong>Location:</strong> {item.location}
                </p>
                <p className="text-gray-500 mb-6" itemProp="history">
                  <strong>Historical Significance:</strong> {item.history}
                </p>

                <a
                  href={item.link}
                  className="flex items-center gap-2 text-black text-lg font-medium group/button"
                  itemProp="url"
                >
                  Discover More
                  <FaAngleRight className="transition-transform duration-300 group-hover/button:translate-x-2" />
                </a>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

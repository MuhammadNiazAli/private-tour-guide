/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Mapview = () => {
  return (
    <section className="w-full max-w-8xl mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 ">
          Great Ocean Road Tour
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-6xl mx-auto mb-4">
          The Great Ocean Road is one of the world's most scenic coastal drives,
          stretching along the southeastern coast of Australia. Known for its
          breathtaking ocean views, lush rainforests, and iconic limestone
          formations like the Twelve Apostles, this road offers an unforgettable
          journey for travelers.
        </p>
        <p className="text-gray-600 text-lg md:text-xl max-w-6xl mx-auto mb-2">
          Visitors often express awe at the dramatic cliffs, pristine beaches,
          and charming coastal towns along the way. Whether on a road trip, a
          guided tour, or a leisurely drive, the Great Ocean Road provides
          endless opportunities for sightseeing, photography, and adventure.
        </p>
        <p className="text-gray-600 text-lg md:text-xl max-w-6xl mx-auto">
          Perfect for nature lovers, couples, and solo travelers, this journey
          promises memorable experiences with panoramic ocean views and a chance
          to explore one of Australia's most iconic landmarks.
        </p>
      </div>

      <div className="w-full h-[500px] md:h-[700px] relative overflow-hidden rounded-xl shadow-lg">
        <iframe
          title="Great Ocean Road Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps?q=Great+Ocean+Road,+Victoria,+Australia&hl=en&z=10&output=embed&t=k"
        ></iframe>
      </div>
    </section>
  );
};

export default Mapview;

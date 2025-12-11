import React from "react";

const About = () => {
  return (
    <div className="h-screen w-full bg-[#E9E1D8] flex justify-center items-center">
      <div className="w-[1200px] h-[500px] bg-white rounded-[50px] shadow-lg p-8 flex flex-col justify-center items-center -mt-60 ml-15">
        <h2 className="text-4xl font-bold text-center text-black mb-10">
          Guiding you to Australia’s best, <br /> one connection at a time.
        </h2>

        <p className="text-xl text-black text-center mb-6 w-[900px]">
          At The Private Tour Guide, we create effortless, enriching, and
          genuinely personal journeys. Our expert local guides bring Australia’s
          hidden gems to life, sharing stories, flavours, and landscapes in a
          way that feels like travelling with a trusted friend.
        </p>

        <p className="text-xl text-black text-center w-[900px]">
          Whether sipping your way through world-class wine country, taking in
          extraordinary landscapes, uncovering our cities’ best-kept secrets, or
          getting up close with Australia’s wildlife, your private touring
          experience is crafted just for you.
        </p>
      </div>
    </div>
  );
};

export default About;

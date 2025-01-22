import React from "react";
import massage from "../assets/massage.jpg";
import scrub from "../assets/scrub.jpg";
import { GiMonsteraLeaf } from "react-icons/gi";

const Intro = () => {
  return (
    <section className="relative w-full py-12 text-white text-center bg-blue overflow-hidden">
      {/* Leaf Icons */}
      <div
        className="absolute top-5 left-5 text-black opacity-90"
        style={{ fontSize: "10rem", zIndex: "-1" }}
      >
        <GiMonsteraLeaf />
      </div>
      <div
        className="absolute bottom-5 right-5 text-black opacity-90"
        style={{ fontSize: "8rem", zIndex: "1" }}
      >
        <GiMonsteraLeaf />
      </div>

      {/* Desktop View: Intro Section Content */}
      <div className="hidden lg:flex flex-col lg:flex-row justify-between items-center mb-12 px-12 lg:px-24 ml-24">
        {/* Left Section - Overlapping images */}
        <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="absolute left-0 top-0 transform -translate-x-1/4 -translate-y-1/4 z-10">
            <img
              src={massage}
              alt="Massage"
              className="rounded-full w-96 h-96 object-cover"
            />
          </div>
          <div className="absolute left-24 top-24 transform -translate-x-1/4 -translate-y-1/4 z-20">
            <img
              src={scrub}
              alt="Scrub"
              className="rounded-xl w-56 h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Section - Short Offer Introduction */}
        <div className="w-full lg:w-1/2 text-left pl-12 lg:pl-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-gold mb-4">
            Spooky Feels offer
          </h2>
          <h3 className="text-lg sm:text-xl font-serif text-white mb-4">
            Indulge in a bewitching escape that will leave your body relaxed,
            rejuvenated, and spellbound this Halloween season.
          </h3>
          <p className="text-lg font-sans text-white">
            Dive into an unforgettable experience with our "Spooky Feels"
            package! Unlock eerie, indulgent treatments designed to leave you
            feeling refreshed and enchanted. This limited-time offer is just the
            thrill you need. Hurry before it vanishes into the night!
          </p>
        </div>
      </div>

      {/* Mobile View: Text Only Centered */}
      <div className="lg:hidden flex flex-col items-center justify-center mb-12 px-4 text-center">
        {/* Right Section - Short Offer Introduction */}
        <div className="text-left mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gold mb-4">
            Spooky Feels offer
          </h2>
          <h3 className="text-lg sm:text-xl font-serif text-white mb-4">
            Indulge in a bewitching escape that will leave your body relaxed,
            rejuvenated, and spellbound this Halloween season.
          </h3>
          <p className="text-lg font-sans text-white mb-8">
            Dive into an unforgettable experience with our "Spooky Feels"
            package! Unlock eerie, indulgent treatments designed to leave you
            feeling refreshed and enchanted. This limited-time offer is just the
            thrill you need. Hurry before it vanishes into the night!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;

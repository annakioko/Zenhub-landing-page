import React from "react";
import massage from "../assets/massage.jpg";
import spa7 from "../assets/spa7.jpg";
import face from "../assets/face.jpg";
import scrub from "../assets/scrub.jpg";
import spa8 from "../assets/spa8.jpg";
import { GiMonsteraLeaf } from "react-icons/gi";

const spaSteps = [
  {
    img: massage,
    title: "Hot Stone Therapy",
    description:
      "Experience the ultimate relaxation with hot stone therapy. Heated stones are placed on key points on your body to melt away tension and relax your muscles.",
  },
  {
    img: scrub,
    title: "Body Scrub",
    description:
      "Enjoy a full-body exfoliation that leaves your skin feeling fresh and revitalized, with natural scrubs designed to remove dead skin cells gently.",
  },
  {
    img: face,
    title: "Face Massage",
    description:
      "Our soothing face massage relaxes facial muscles, improves circulation, and leaves you with a fresh, radiant glow.",
  },
  {
    img: spa7,
    title: "Full Body Massage",
    description:
      "Complete your experience with a full-body massage designed to ease muscle tension, improve circulation, and promote deep relaxation.",
  },
];

const Offer = () => {
  return (
    <section className="relative w-full py-12 text-white text-center bg-blue overflow-hidden">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-2xl opacity-40"
        style={{
          backgroundImage: `url(${spa8})`,
          zIndex: "-1", // Ensures the blurred background is behind the content
          width: "100%",
          height: "100%",
        }}
      ></div>

      {/* Leaf Icons */}
      <div
        className="absolute top-5 left-5 text-black opacity-90"
        style={{ fontSize: "8rem", zIndex: "1" }}
      >
        <GiMonsteraLeaf />
      </div>
      <div
        className="absolute bottom-5 right-5 text-black opacity-90"
        style={{ fontSize: "8rem", zIndex: "1" }}
      >
        <GiMonsteraLeaf />
      </div>

      <h2 className="text-5xl text-gold font-serif mb-2 relative z-10">
        Spooky Feels:
      </h2>
      <div className="w-32 h-1 bg-gold mx-auto mb-5 opacity-50"></div>
      <h2 className="text-2xl text-gold font-serif mb-8 relative z-10">
        What the offer entails
      </h2>

      {/* Image Sequence */}
      <div className="relative flex flex-wrap justify-center space-x-3 mb-8 z-10">
        {spaSteps.map((step, index) => (
          <div
            key={index}
            className="w-1/4 sm:w-1/5 lg:w-1/5 mb-4 flex justify-center"
          >
            <img
              src={step.img}
              alt={step.title}
              className="rounded-full object-cover h-32 w-32"
            />
            <p className="mt-2 text-xl font-bold text-white">{index + 1}</p>
          </div>
        ))}
      </div>

      {/* Step Explanations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 sm:px-12 lg:px-24 text-left mb-10 relative z-10">
        {spaSteps.map((step, index) => (
          <div key={index} className="relative p-4">
            <span className="absolute top-0 left-0 text-9xl opacity-20 text-gold -z-10 font-serif">
              {index + 1}
            </span>
            <h3 className="text-2xl sm:text-3xl text-gold font-serif">
              {step.title}
            </h3>
            <p className="mt-2 font-sans text-white">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Duration and Price Box */}
      <div className="flex justify-center relative z-10">
        <div className="bg-blue border border-gold text-white text-xl rounded-full py-4 px-8 mt-8">
          <p>Duration --------- 180Mins . Price------------ $220 Pp</p>
        </div>
      </div>
    </section>
  );
};

export default Offer;

import React, { useState } from "react";
import sauna from "../assets/sauna.jpg";
import spa3 from "../assets/spa3.jpg";
import spa4 from "../assets/spa4.jpg";
import spa5 from "../assets/spa5.jpg";
import spa6 from "../assets/spa6.jpg";
import spa7 from "../assets/spa7.jpg";

const galleryImages = [
  { src: spa3, name: "Epsom salt baths" },
  { src: spa4, name: "Finnish sauna" },
  { src: spa5, name: "Deep Tissue Massage" },
  { src: spa6, name: "2nd Finnish sauna" },
  { src: spa7, name: "Aromatherapy Massage" },
  { src: sauna, name: "Sauna" },
];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full flex flex-col items-center py-8 bg-blue">
      <h2 className="font-serif mb-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold text-center">
        GALLERY
      </h2>
      <div className="w-24 sm:w-32 md:w-40 lg:w-48 h-1 bg-gold mx-auto mb-8"></div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex w-3/4 justify-between items-center space-x-4">
        {/* Left Section: Large Image Display */}
        <div className="w-2/3 flex flex-col items-center">
          <img
            src={galleryImages[currentImageIndex].src}
            alt={galleryImages[currentImageIndex].name}
            className="w-full h-96 object-cover rounded-xl"
          />
          <p className="mt-4 text-xl font-sans font-semibold text-gold">
            {galleryImages[currentImageIndex].name}
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-transparent border border-gold hover:bg-gold transition-all text-white"
          >
            <span className="text-2xl font-bold">&#8592;</span>
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-transparent border border-gold hover:bg-gold transition-all text-white"
          >
            <span className="text-2xl font-bold">&#8594;</span>
          </button>
        </div>

        {/* Right Section: Thumbnails in 2 Columns */}
        <div className="w-1/3 grid grid-cols-2 gap-4">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.name}
              className={`w-32 h-32 object-cover rounded-xl ${
                index === currentImageIndex
                  ? "border-gray-700"
                  : "border-transparent"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-3/4 flex flex-col items-center">
        {/* Large Image Display */}
        <div className="w-full flex flex-col items-center">
          <img
            src={galleryImages[currentImageIndex].src}
            alt={galleryImages[currentImageIndex].name}
            className="w-full h-96 object-cover rounded-xl"
          />
          <p className="mt-4 text-xl font-sans font-semibold text-gold">
            {galleryImages[currentImageIndex].name}
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex space-x-4 my-4">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-transparent border border-gold hover:bg-gold transition-all text-white"
          >
            <span className="text-2xl font-bold">&#8592;</span>
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-transparent border border-gold hover:bg-gold transition-all text-white"
          >
            <span className="text-2xl font-bold">&#8594;</span>
          </button>
        </div>

        {/* Thumbnails */}
        <div className="w-full grid grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.name}
              className={`w-full h-24 object-cover rounded-xl ${
                index === currentImageIndex
                  ? "border-gray-700"
                  : "border-transparent"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

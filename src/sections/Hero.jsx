import React, { useState, useEffect } from "react";
import { GiMonsteraLeaf } from "react-icons/gi"; 
import face from "../assets/face.jpg"; 

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });
  const [isExpired, setIsExpired] = useState(false); 
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    const countdownDate = new Date("October 31, 2024 23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        if (!isExpired) {
          setIsExpired(true);
        }
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        setTimeLeft({ days, hours, minutes });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isExpired]);

  // Handle the button click
  const handleButtonClick = () => {
    if (isExpired) {
      setShowModal(true);
    } else {
      // Proceed with booking if offer is not expired
    }
  };

  return (
    <section className="relative w-full py-12 text-white text-center bg-blue overflow-hidden flex items-center mt-8 justify-between">
      {/* Left Side Text */}
      <div className="w-1/2 text-left p-8">
        <h2 className="text-5xl text-gold font-serif mb-8">
          Welcome to Zen Hub
        </h2>
        <p className="font-sans text-xl text-white mb-8">
          Escape the chaos of daily life and step into a world of tranquility at
          our spa. Let our expert therapists soothe your mind, body, and soul
          with personalized treatments designed just for you. Whether you need
          to unwind, recharge, or simply indulge, we promise an experience that
          leaves you feeling renewed, relaxed, and radiant. Your moment of bliss
          awaits.
        </p>
        <button
          className="font-sans text-xl text-white bg-blue border-2 border-gold  rounded-full py-4 px-8 mt-8 hover:bg-gold"
          onClick={handleButtonClick}
        >
          Claim Your Moment of Relaxation Today
        </button>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 mr-9">
        <img
          src={face}
          alt="Building your online presence"
          className="w-full h-auto
                  object-cover"
        />
      </div>

      {/* Modal for expired offer */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-blue p-8  text-center">
            <h3 className="text-2xl font-bold mb-4">Offer Expired</h3>
            <p>
              The booking offer has expired. Please check back later for new
              offers!
            </p>
            <button
              className="mt-4 bg-blue text-white py-2 px-6 "
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;

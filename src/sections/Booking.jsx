import React, { useState, useEffect } from "react";
import { GiMonsteraLeaf } from "react-icons/gi"; // Ensure you have this package installed
import spaBackground from "../assets/spa8.jpg"; // Update the path as needed

const Booking = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });
  const [isExpired, setIsExpired] = useState(false); // Track whether the timer expired

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
          window.alert("The booking offer has expired!");
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

  return (
    <section className="relative w-full py-12 text-white text-center bg-blue overflow-hidden">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-2xl opacity-40"
        style={{
          backgroundImage: `url(${spaBackground})`,
          zIndex: "-1",
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

      <h2 className="text-5xl text-gold font-serif mb-8 relative z-10">
        Book Your Spa Experience
      </h2>

      {/* Countdown Timer */}
      <div className="text-3xl font-bold mb-8 relative z-10">
        <p className="mb-2">Time Left Until Booking Closes:</p>
        {isExpired ? (
          <span>Offer Expired</span>
        ) : (
          <>
            <span>{`${timeLeft.days} Days `}</span>
            <span>{`${timeLeft.hours} Hours `}</span>
            <span>{`${timeLeft.minutes} Minutes `}</span>
          </>
        )}
      </div>

      {/* Booking Form */}
      {!isExpired && (
        <form className="flex flex-col items-center mb-10 relative z-10">
          <input
            type="text"
            placeholder="Your Name"
            className="mb-4 p-2 w-80 sm:w-96 md:w-1/2 lg:w-1/3 rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="mb-4 p-2 w-80 sm:w-96 md:w-1/2 lg:w-1/3 rounded"
            required
          />
          <input
            type="text"
            placeholder="Preferred Date"
            className="mb-4 p-2 w-80 sm:w-96 md:w-1/2 lg:w-1/3 rounded"
            required
          />
          <textarea
            placeholder="Additional Requests"
            className="mb-4 p-2 w-80 sm:w-96 md:w-1/2 lg:w-1/3 rounded"
            rows="4"
          />
          <button
            type="submit"
            className="bg-gold text-white py-2 px-6 rounded-full"
          >
            Submit Booking
          </button>
        </form>
      )}

      {/* Footer Note */}
      <div className="text-lg text-white relative z-10">
        {!isExpired && <p>Please book before the timer runs out!</p>}
      </div>
    </section>
  );
};

export default Booking;

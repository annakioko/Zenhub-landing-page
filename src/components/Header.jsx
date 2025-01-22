import React, { useState, useEffect } from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-blue p-9 flex justify-between items-center px-4 py-3 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Left - Social Media Icons */}
      <div className="flex items-center space-x-4">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-800 transition-colors"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-800 transition-colors"
        >
          <FaTiktok size={24} />
        </a>
      </div>

      {/* Center - Logo */}
      <div className="text-lg font-bold mx-auto">
        <h1>My Website</h1>
      </div>

      {/* Right - Placeholder for Additional Items (if needed) */}
      <div className="flex-1"></div>
    </header>
  );
};

export default Header;

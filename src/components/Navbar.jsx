import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white  z-50 bg-blue">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left: Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="#hero" className="hover:text-gold transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a
              href="#intro"
              className="hover:text-gold transition duration-300"
            >
              Overview
            </a>
          </li>
          <li>
            <a
              href="#offer"
              className="hover:text-gold transition duration-300"
            >
              Offer
            </a>
          </li>
          <li>
            <a
              href="#booking"
              className="hover:text-gold transition duration-300"
            >
              Booking
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="hover:text-gold transition duration-300"
            >
              Gallery
            </a>
          </li>
        </ul>

        {/* Center: Spa Name */}
        <h1 className="text-2xl font-serif text-gold font-bold">Zen Hub</h1>

        {/* Right: Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition duration-300"
          >
            <FaTiktok size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger and close icons

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white z-50 bg-blue">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left: Navigation Links */}
        <ul className="hidden md:flex space-x-6">
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

        {/* Right: Social Media Icons (Desktop) */}
        <div className="hidden md:flex space-x-4">
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

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-900 text-white py-4 px-6 space-y-4">
          <ul>
            <li>
              <a
                href="#hero"
                className="hover:text-gold transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#intro"
                className="hover:text-gold transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#offer"
                className="hover:text-gold transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Offer
              </a>
            </li>
            <li>
              <a
                href="#booking"
                className="hover:text-gold transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Booking
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="hover:text-gold transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
            </li>
          </ul>
          {/* Social Media Icons (Mobile) */}
          <div className="flex space-x-4 mt-4">
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
      )}
    </nav>
  );
}

export default Navbar;

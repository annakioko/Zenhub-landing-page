import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue ">
      {/* Separator Line */}
      <div className="border-t border-gold mx-24 opacity-20"></div>

      {/* Footer Content */}
      <div className="py-8 text-center">
        {/* Logo */}
        <div className="mb-6">
          <h1 className="text-6xl font-serif  text-gold">Zen Hub</h1>
        </div>

        {/* Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 ">
          {/* Location */}
          <div>
            <h3 className="text-3xl text-gold font-serif font-semibold mb-2">
              Location
            </h3>
            <p className="text-lg font-sans text-white">123 Innovation Drive</p>
            <p className="text-lg font-sans text-white">Suite 400</p>
            <p className="text-lg font-sans text-white">
              San Francisco, CA 94107
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-3xl font-serif text-gold font-semibold mb-2">
              Contact
            </h3>
            <p className="text-lg font-sans text-white">zenhub@gmail.com</p>
            <p className="text-lg font-sans text-white">+1 (415) 555-1234</p>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-3xl text-gold font-serif font-semibold mb-2">
              Socials
            </h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-white hover:text-gold transition-colors"
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

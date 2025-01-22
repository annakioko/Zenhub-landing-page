import React from "react";
import Offer from "./sections/Offer";
import Gallery from "./sections/Gallery";
import Booking from "./sections/Booking";
import Header from "./components/Header"; // Import Header
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer"; // Import Footer
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";

const App = () => {
  return (
    <div>
      {/* Navbar */}
     
        <Navbar />
     

      {/* Sections with IDs for navigation */}
      <section id="hero">
        <Hero />
      </section>
      <section id="intro">
        <Intro />
      </section>
      <section id="offer">
        <Offer />
      </section>
      <section id="booking">
        <Booking />
      </section>
      <section id="gallery">
        <Gallery />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

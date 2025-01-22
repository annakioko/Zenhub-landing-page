// App.js
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
      {/* Include Header at the top */}
      <Header />

    
      <Navbar />

     
      <Hero />
      <Intro/>
      <Offer />
      <Booking />
      <Gallery />

     
      <Footer />
    </div>
  );
};

export default App;

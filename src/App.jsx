// App.js
import React from "react";
import Offer from "./sections/Offer";
import Gallery from "./sections/Gallery";
import Booking from "./sections/Booking";
import Header from "./components/Header"; // Import Header
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer"; // Import Footer
import Hero from "./sections/Hero";

const App = () => {
  return (
    <div>
      {/* Include Header at the top */}
      <Header />

      {/* Include Navbar under the header */}
      <Navbar />

      {/* Other components */}
      <Hero />
      <Offer />
      <Booking />
      <Gallery />

      {/* Include Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default App;

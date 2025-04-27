import React from "react";

import {
  Navbar,
  Hero,
  About,
  Offer,
  Projects,
  Contact,
} from "./components/index.js";


const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero></Hero>
      </div>

      <div>
        <About />
        <Offer />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;

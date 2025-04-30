import React from "react";

import {
  Navbar,
  Hero,
  About,
  Offer,
  Projects,
  Contact,
  Comments,
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
        <Comments />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;

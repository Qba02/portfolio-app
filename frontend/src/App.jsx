import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Offer,
  Projects,
  Contact,
  Footer,
  Loader,
} from "./components/index.js";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader></Loader>
      ) : (
        <main className="relative z-0 bg-light dark:bg-dark">
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
          <Footer></Footer>
        </main>
      )}
    </BrowserRouter>
  );
};

export default App;

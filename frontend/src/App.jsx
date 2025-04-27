import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import { Loader, Footer } from "./components/index";

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
          <HomePage/>
          <Footer></Footer>
        </main>
      )}
    </BrowserRouter>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage, AdminPanelPage, NotFoundPage} from "@pages/index";
import { Loader, Footer } from "@components/index";

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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPanelPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          <Footer></Footer>
        </main>
      )}
    </BrowserRouter>
  );
};

export default App;

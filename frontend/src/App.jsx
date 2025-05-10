import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, AdminPanelPage, NotFoundPage } from "./pages/index";
import { Loader, Footer } from "./components/index";
import { pagesUrl } from "./constants/links";

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
        <div className="m-auto w-full h-screen flex flex-col justify-center items-center p-6 z-20">
          <Loader />
        </div>
      ) : (
        <main className="relative z-0 bg-light dark:bg-dark">
          <Routes>
            <Route path={pagesUrl.home} element={<HomePage />} />
            <Route path={pagesUrl.adminPanel} element={<AdminPanelPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          <Footer></Footer>
        </main>
      )}
    </BrowserRouter>
  );
};

export default App;

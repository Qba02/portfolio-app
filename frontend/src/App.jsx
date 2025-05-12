import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Loader } from "./components/index";
import { pagesUrl } from "./constants/links";
import PrivateRoute from "./context/PrivateRoute";
import {
  AdminPanelPage,
  HomePage,
  LoginPage,
  NotFoundPage,
} from "./pages/index";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <BrowserRouter>
      <main className="relative z-0 bg-light dark:bg-dark">
        {loading ? (
          <div className="m-auto w-full h-screen flex flex-col justify-center items-center p-6 z-20">
            <Loader />
          </div>
        ) : (
          <>
            <Routes>
              <Route path={pagesUrl.login} element={<LoginPage />} />
              <Route path={pagesUrl.home} element={<HomePage />} />
              <Route
                path={pagesUrl.adminPanel}
                element={
                  <PrivateRoute>
                    <AdminPanelPage />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer></Footer>
          </>
        )}
      </main>
    </BrowserRouter>
  );
};

export default App;

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loader } from "./components/index";
import { PAGES_URL } from "./constants/links";
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
              <Route path={PAGES_URL.login} element={<LoginPage />} />
              <Route path={PAGES_URL.home} element={<HomePage />} />
              <Route
                path={PAGES_URL.adminPanel}
                element={
                  <PrivateRoute>
                    <AdminPanelPage />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </>
        )}
      </main>
    </BrowserRouter>
  );
};

export default App;

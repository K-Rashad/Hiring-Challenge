import React from "react";
import { Route, Routes } from "react-router-dom";
const LazyAdminPage = React.lazy(() => import("./pages/adminPage"));
const LazyMainPage = React.lazy(() => import("./pages/mainPage"));

// import { Spinner } from "./pages/Spinner";

import { Spinner } from "./pages/Spinner";
export default function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/Hiring-Challenge"
          element={
            <React.Suspense
              fallback={
                <div className="flex h-[100vh] w-full justify-center items-center">
                  <div className="loading text-mainViolet loading-spinner loading-lg" />
                </div>
              }
            >
              <LazyMainPage />
            </React.Suspense>
          }
        />
        <Route
          path="/admin"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyAdminPage />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
}

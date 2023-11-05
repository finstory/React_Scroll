import { Route, Routes } from "react-router-dom";

import { NavBar } from "../components/Global/NavBar";
import { Footer } from "../components/Global/Footer";
import { Dashboard } from "../pages/Dashboard";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
};

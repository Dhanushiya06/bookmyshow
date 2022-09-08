import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MoviesPage from "./Pages/MoviesPage";
import TheatresPage from "./Pages/TheatresPage";
import HistoryPage from "./Pages/HistoryPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/Homepage";
import RegisterPage from "./Pages/RegisterPage";
import AppBar from "./Components/AppBar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie" element={<MoviesPage />} />
          <Route path="/theatre" element={<TheatresPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MoviesPage from "./Pages/MoviesPage";
import HistoryPage from "./Pages/HistoryPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/Homepage";
import RegisterPage from "./Pages/RegisterPage";
import TicketPage from "./Pages/TicketPage";
import SummaryPage from "./Pages/SummaryPage";
import AdminPage from "./Pages/AdminPage";
import AddTheatreComponent from "./Components/AddTheatreComponent";
import AddMovieComponent from "./Components/AddMovieComponent";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { UserContext } from "./context/UserContext";

const App = () => {
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoutes auth={loggedInUser.isLoggedIn} />}>
          <Route path="/movie" element={<MoviesPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/tickets" element={<TicketPage />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/addtheatre" element={<AddTheatreComponent />} />
          <Route path="/addmovie" element={<AddMovieComponent />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

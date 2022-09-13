import React, { useState } from "react";
import AppBar from "../Components/AppBar";
import FooterComponent from "../Components/FooterComponent";
import MovieComponent from "../Components/movie/MovieComponent";

const MoviesPage = () => {
  return (
    <div>
      <AppBar />
      <MovieComponent title={"MOVIES"} />
      <FooterComponent />
    </div>
  );
};

export default MoviesPage;

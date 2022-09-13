import React, { useEffect, useState } from "react";
import AppBar from "../Components/AppBar";
import FooterComponent from "../Components/FooterComponent";
import MovieComponent from "../movie/MovieComponent";


const HomePage = () => {
  return (
    <>
      <AppBar />
      <MovieComponent title={"RECOMMENDED MOVIES"} />

      <FooterComponent />
    </>
  );
};

export default HomePage;

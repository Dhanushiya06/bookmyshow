import React, { useState } from "react";
import Title from "./Title";

const HistoryComponent = ({title}) => {
const [movies, setMovies] = useState([]);
  return (
    <div class="container mt-5">
      <div class="table-responsive">
        <table class="table table-striped table-bordered table-hover">
          <thead>
          <Title title={title} />
            <tr>
              <th col="2">Name</th>
              <th>Theatre Name</th>
              <th> Movie Name</th>
              <th>Total Tickets</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td col="2">{/* <h6>{theatre.theatreName}</h6> */}</td>
                <td></td>
                <td class="font-weight-bold">{movie.movieName}</td>
                <td></td>
                <td>{movie.price}</td>
                <td>{movie.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryComponent;

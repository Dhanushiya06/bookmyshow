import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import movieApi from "../api/movieApi";
import Title from "./Title";

let INITIAL_VALUE = {
  userName: "",
  movieName: "",
  theatreName: " ",
  tickets: "",
  price: "",
  date: "",
};

const HistoryComponent = ({ title }) => {
  const [movies, setMovies] = useState([]);
  // const [histroy, setHistory] = useState(INITIAL_VALUE);

  useEffect(() => {
    movieApi
      .get(`/history/all`)
      .then((res) => {
        console.log(res.data.data);
        if (res.data.data) {
          setMovies(res.data.data);
        } else if (res.data.error) {
          console.log(res.data.error.message);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(`Error -> ${error}`);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <Title title={title} />
            <tr>
              <th>Theatre Name</th>
              <th> Movie Name</th>
              <th>Total Tickets</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={index}>
                <td col="2">
                  <h6>{movie.theatreName}</h6>
                </td>
                <td className="font-weight-bold">{movie.movieName}</td>
                <td>{movie.tickets}</td>
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

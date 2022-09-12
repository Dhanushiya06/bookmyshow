import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import movieApi from "../api/movie";
import { movies } from "../data/dummy";
const TheatreTableComponent = () => {
  const [theatres, setTheatres] = useState([]);

  useEffect(() => {
    movieApi
      .get(`/theatre/all`)
      .then((res) => {
        console.log(res.data.data);
        if (res.data.data) {
          setTheatres(res.data.data);
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

  const deleteAPI = (event, id) => {
    event.preventDefault();
    movieApi
      .delete(`/theatre/${id}`)
      .then((res) => {
        if (res.data.data) {
          setTheatres(res.data.data);
        } else if (res.data.error) {
          console.log(res.data.error.message);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(`Error -> ${error}`);
      });
  };

  return (
    <div className="table-responsive">
      <h3>Theatre</h3>
      <Link to="/addtheatre">
        <button className="btn bg-secondary text-white">Add Theatre</button>
      </Link>
      <table className="table table-striped table-bordered table-hover my-5">
        <thead className="table-light">
          <tr>
            <th>Theatre</th>
            <th>Movie</th>
            <th>Tickets</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {theatres.map((theatre, index) => (
            <tr key={index}>
              <h6>{theatre.theatreName}</h6>
              <td>
                {theatre.movie.length > 0
                  ? theatre.movie[0].movieName
                  : "No movie"}
              </td>
              <td>{theatre.tickets}</td>

              <td>
                <Link to={"/movie"}>
                  <button className="btn bg-success text-white btn-sm mx-1">
                    Edit
                  </button>
                </Link>
                <button
                  className="btn bg-danger text-white btn-sm mx-1"
                  onClick={(event) => deleteAPI(event, theatres.theatreId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TheatreTableComponent;

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import movieApi from "../../api/movieApi";

const MovieTableComponent = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieApi
      .get(`/movie/all`)
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

  const deleteAPI = (event, id) => {
    event.preventDefault();
    movieApi
      .delete(`/movie/${id}`)
      .then((res) => {
        if (res.data.data) {
          console.log(res.data.data);
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
  };

  return (
    <div className="table-responsive">
      <div>
        <h3>Movie</h3>
        <Link to="/addmovie">
          <button className=" btn bg-secondary text-white">Add Movie</button>
        </Link>
      </div>
      <table className="table table-striped table-bordered table-hover my-5">
        <thead className="table-light">
          <tr>
            <th>Movie Name</th>
            <th>Price</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movies, index) => (
            <tr key={index}>
              <td>{movies.movieName}</td>
              <td>{movies.price}</td>
              <td>{movies.date}</td>
              <td>
                <Link to={"/movie"}>
                  <button className="btn bg-success text-white btn-sm mx-1">
                    Edit
                  </button>
                </Link>
                <button
                  className="btn bg-danger text-white btn-sm mx-1"
                  onClick={(event) => deleteAPI(event, movies.movieId)}
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
export default MovieTableComponent;

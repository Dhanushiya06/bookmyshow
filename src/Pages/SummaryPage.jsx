import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import movieApi from "../api/movieApi";
import "../assets/style/login.css";
import AppBar from "../Components/AppBar";
import FooterComponent from "../Components/FooterComponent";
import { UserContext } from "../context/UserContext";

const SummaryPage = () => {
  const { booking } = useContext(UserContext);
  const navigate = useNavigate();

  const bookingApi = () => {
    console.log(booking);
    movieApi
      .post("/history", booking)
      .then((res) => {
        if (res.data.data) {
          navigate("/");
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
    <div>
      <AppBar />
      <div className="row col summary  d-grid gap-3 p-5 border border-5 m-5">
        <div className="row d-flex justify-content-center align-items-center mt-sm-5 col-lg-5 col-10">
          <div>
            <h3>
              <b>SUMMARY</b>
            </h3>
          </div>
          <div className="row">
            <div className="col">
              <div className="col text-left">
                Total tickets : {booking.tickets}
              </div>
              <div classNam="row col-text-left">
                Total Price: {booking.tickets * booking.price}
              </div>
            </div>
          </div>
        </div>
        <p>Your booking is confirmed!</p>
        <button
          className="btn bg-secondary"
          onClick={(event) => {
            event.preventDefault();
            bookingApi(event);
          }}
        >
          CHECKOUT
        </button>
      </div>
      <FooterComponent />
    </div>
  );
};
export default SummaryPage;

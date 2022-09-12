import React, { useState } from "react";
import "../assets/style/login.css";
import { Link } from "react-router-dom";
import AppBar from "../Components/AppBar";
import Lottie from "react-lottie";
import animationData from "../assets/animations/9103-entertainment.json";
import FooterComponent from "../Components/FooterComponent";

const TicketPage = ({ select }) => {
  const [selected, setSelected] = useState(10);

  const handleChange = (event) => {
    setSelected(+event.currentTarget.value);
    select(+event.currentTarget.value);
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <AppBar />
      <div className="d-grid gap-3 p-5 border border-5 m-5">
      <div className="pb-5">
                <Lottie options={defaultOptions} height={400} width={400} />
              </div>
        <h2>TICKETS</h2>
        <ul className="rating">
          {Array.from({ length: 10 }, (_, i) => (
            <li key={`rating-${i + 1}`}>
              <input
                type={"radio"}
                id={`num${i + 1}`}
                name="rating"
                value={i + 1}
                onChange={handleChange}
                checked={selected === i + 1}
              />
              <label htmlFor={`num${i + 1}`}>{i + 1}</label>
            </li>
          ))}
        </ul>
        <div>
          <p>Movie Name : BACHELOR</p>
          <p>Price: Rs. 150</p>
        </div>
        <Link to="/summary">
          <button className="btn btn-secondary w-100">Tickets</button>
        </Link>
      </div>
      <FooterComponent/>
    </div>
  );
};
export default TicketPage;

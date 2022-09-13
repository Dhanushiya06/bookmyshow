import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import movieApi from "../api/movieApi";

const RegisterComponent = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({ name: "",email:"", password: "" });

  const registerAPI = (event) => {
    event.preventDefault();

    movieApi
      .post(`/auth/register`, {
        name: register.name,
        email: register.email,
        password: register.password,
      })
      .then((res) => {
        if (res.data.data) {
          navigate("/login");
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
      <div>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="User Name"
              value={register.name}
              onChange={(event) => {
                setRegister({ ...register, name: event.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={register.email}
              onChange={(event) => {
                setRegister({ ...register, email: event.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={register.password}
              onChange={(event) => {
                setRegister({ ...register, password: event.target.value });
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(event) => registerAPI(event)}
          >
            Sign Up
          </button>
          <p className="text-start mt-3">
            Already do u have account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;

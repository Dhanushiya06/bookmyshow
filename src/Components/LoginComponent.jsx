import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import movieApi from "../api/movie";


const LoginComponent = () => {
  const numberRegEx = /^[6-9]\d{9}$/gi;
  const nameRegExp = /[a-zA-Z]/g;

  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(UserContext);
  const [login, setLogin] = useState({ name: "", password: "" });
  const [loginError, setLoginError] = useState({ name: "", password: "" });
  const loginAPI = (event) => {
    event.preventDefault();

    movieApi
      .post(`/auth/login`, {
        email: login.name,
        password: login.password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.data) {
          let loggedInUser = res.data.data;
          loggedInUser.isLoggedIn = true;
          setLoggedInUser(loggedInUser);
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
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="User Name"
            value={login.name}
            onChange={(event) => {

              let name = event.target.value;
              if (name.length < 3 || nameRegExp.test(name) === false) {
                setLoginError("Enter a valid name");
              } else {
                setLoginError("");
              }
              setLogin({ ...login, name: name });
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={login.password}
            onChange={(event) => {
              if (login.password.length > 5) {
                setLogin({ ...login, password: event.target.value });
              } else {
                setLoginError({
                  ...loginError,
              
                });
              }
              setLogin({ ...login,password:event.target.value });
            }}
          />
        </div>
        <div>
          <Link to="/ ">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(event) => loginAPI(event)}
            >
              Login
            </button>
          </Link>
        </div>
        <p className="text-start mt-3">
          Not registered? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginComponent;

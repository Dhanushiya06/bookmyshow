import React from "react";

import Lottie from "react-lottie";
import animationData from "../assets/animations/9103-entertainment.json";

import "../assets/style/login.css";

const RegisterPage = () => {
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
      <div className="container bg-white pb-5 m-5">
        <div className="row d-flex justify-content-start align-items-center mt-sm-5">
          <div className="col-lg-5 col-10">
            <div id="circle"></div>
            <div className="pb-5">
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
          </div>
          <div className="col-lg-4 offset-lg-2 col-md-6 offset-md-3">
            <div className="pt-4">
              <h6>
                <span className="fa fa-superpowers text-primary px-md-2"></span>
                SHIYAA SHOWS!!
              </h6>
            </div>
            <div className="mt-3 mt-md-5">
              <h5>Create your account</h5>
              <form className="pt-4">
                <div className="d-flex flex-column pb-3">
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="name"
                    className="form-control"
                  />
                </div>
                <div className="d-flex flex-column pb-3">
                  <input
                    type="email"
                    name="email"
                    id="emailId"
                    placeholder="email"
                    className="form-control"
                  />
                </div>
                <div className="d-flex flex-column pb-3">
                  <input
                    type="password"
                    name="passwrd"
                    id="pwd"
                    placeholder="password"
                    className="form-control"
                  />
                </div>
                <input
                  type="button"
                  value="Sign up"
                  className="btn btn-primary btn-block mb-3"
                />
                <div className="register mt-5">
                  <p>
                    Do you have an account?{" "}
                    <a href="/login">Sign in</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

import React from "react";

import Lottie from "react-lottie";
import animationData from "../assets/animations/9103-entertainment.json";

import "../assets/style/login.css";

const LoginPage = () => {
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
              <h5>Log in to your account</h5>
              <form className="pt-4">
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
                <div className="d-flex jusity-content-end pb-4">
                  <div className="ml-auto">
                    <a href="#" className="text-danger text-decoration-none">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <input
                  type="button"
                  value="Log in"
                  className="btn btn-primary btn-block mb-3"
                />
                <div className="register mt-5">
                  <p>
                    Don't have an account? <a href="register">Create an account</a>
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

export default LoginPage;

import React from "react";

import Lottie from "react-lottie";
import animationData from "../assets/animations/9103-entertainment.json";

import "../assets/style/login.css";
import AuthComponent from "../Components/AuthComponent";
import RegisterComponent from "../Components/RegisterComponent";

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
         <AuthComponent>
            <RegisterComponent />
            </AuthComponent>
          </div>
        </div>
      </div>
    
  );
};

export default RegisterPage;

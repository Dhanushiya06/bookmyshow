import React from "react";

const AuthComponent = ({children}) => {
  return <div className="col-lg-4 offset-lg-2 col-md-6 offset-md-3">
  <div className="pt-4">
    <h6>
      <span className=" text-primary px-md-2"></span>
      SHIYAA SHOWS!!
    </h6>
  </div>
  <div className="mt-3 mt-md-5">
    <h5>Log in to your account</h5>
  </div>
 {children}
</div>
};

export default AuthComponent;

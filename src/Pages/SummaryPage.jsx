import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/login.css";
import FooterComponent from "../Components/FooterComponent";
const SummaryPage = () => {
  return (
    <div>
        <div className="row col summary  d-grid gap-3 p-5 border border-5 m-5">
        <div className="row d-flex justify-content-center align-items-center mt-sm-5 col-lg-5 col-10">
          <div>
            <h3>
              <b>Summary</b>
            </h3>
          </div>
          <div className="row">
       <div className="col">
            <div className="col text-left">Total tickets : 2</div>
          <div classNam="row col-text-left">Total Price Rs: 300</div>
      </div>
      </div>
      </div>
      <Link to="/ ">
      <button className="btn bg-secondary">CHECKOUT</button></Link>
    </div>
    <FooterComponent/>
    </div>
  );
};
export default SummaryPage;

import React, { useState } from "react";
import AppBar from "../Components/AppBar";
import FooterComponent from "../Components/FooterComponent";
import HistoryComponent from "../Components/HistoryComponent";


const HistoryPage = () => {
  return (
    <div>
      <AppBar />
     <HistoryComponent title={"HISTORY"}/>
      <FooterComponent/>
    </div>
  );
};
export default HistoryPage;

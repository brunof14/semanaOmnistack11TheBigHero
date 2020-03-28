import React from "react";

import logo from "../../assets/logo.svg";
import "./style.css";

export default function Loading() {
  return (
    <div className="loading">
      <div className="animationLoading">
        <img src={logo} alt="Loading" />
      </div>
    </div>
  );
}

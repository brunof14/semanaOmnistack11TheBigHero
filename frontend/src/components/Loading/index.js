import React from "react";

import logo from "../../assets/logo.svg";
import "./style.css";

export default function Loading({ children, active = true }) {
  return (
    <>
      {active ? (
        <div className="loading">
          <div className="animationLoading">
            <img src={logo} alt="Loading" />
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}

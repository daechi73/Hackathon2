import React from "react";
import "../style/Loading.css";
const Loading = () => {
  return (
    <div className="loading">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="loadingName">Loading...</div>
    </div>
  );
};

export default Loading;

import React from "react";
import "../index.css";

function Loading() {
  return (
    <div className="lds-roller container h-screen flex items-center justify-center">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loading;

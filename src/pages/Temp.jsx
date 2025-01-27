import React from "react";
import "./Temp.css";
import rishi from "../assets/rishi.png"
const Temp = () => {
  const handleStart = () => {
    // Navigate to the game page
    window.location.href = "/game";
  };

  return (
    <div className="container">
      <div className="rectangle">
        <img
          src={rishi}
          alt="Memory Game Image"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
      <div className="input-container">
        <label htmlFor="name-input">Name:</label>
        <input type="text" id="name-input" placeholder="Enter your name" />
      </div>
      <button type="button" id="start-button" className="b1" onClick={handleStart}>
        Start
      </button>
    </div>
  );
};

export default Temp;

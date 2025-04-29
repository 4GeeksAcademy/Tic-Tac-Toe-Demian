import React from "react";

export const WinnerMessage = ({ message }) => {
  return (
    <div className="winner-message">
      <h2>{message || " "}</h2> 
    </div>
  );
};
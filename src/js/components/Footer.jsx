import React from "react";

export const Footer = ({ turn, restartGame, turns }) => {
  return (
    <footer className="d-flex justify-content-between align-items-center mt-3">
      <div className="turn">
        <h2>Turno: {turns[turn]}</h2>
      </div>

      <button className="restart btn btn-light" onClick={restartGame}>
        Empezar de Nuevo
      </button>
    </footer>
  );
};
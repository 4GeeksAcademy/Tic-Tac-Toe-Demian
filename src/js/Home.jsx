import React, { useState } from "react";
import { Board } from "./components/Board";
import { WinnerMessage } from "./components/WinnerMessage";
import { Footer } from "./components/Footer";
import { turns, checkWinner, newWinner } from "./Utils";

export const Home = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");

  const handleClick = (index) => {
    if (!board[index] && !checkWinner(board)) {
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setTurn("X");
  };

  return (
    <div>
      <WinnerMessage message={newWinner(board)} />

      <div className="board">
        <Board board={board} handleClick={handleClick} />
      </div>

      <Footer turn={turn} restartGame={restartGame} turns={turns} />
    </div>
  );
};
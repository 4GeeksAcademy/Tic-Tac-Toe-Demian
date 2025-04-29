import React from 'react';

export const Board = ({ board, handleClick }) => {
    return (
        <div className="board">
            {board.map((value, index) => (
                <button
                    key={index}
                    className="square"
                    onClick={() => handleClick(index)}
                >
                    {value}
                </button>
            ))}
        </div>
    );
};
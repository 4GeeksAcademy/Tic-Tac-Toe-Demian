export const turns = {
    X: "✕",
    O: "◯",
};

export const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

export const checkWinner = (board) => {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
};

export const newWinner = (board) => {
    const winner = checkWinner(board);
    if (winner) {
        return `El ganador es: ${turns[winner]}`;
    } else if (board.every((square) => square)) {
        return "Empate";
    }
};
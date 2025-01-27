import React, { useState, useEffect } from "react";
import "./Game.css";
import Confetti from "react-confetti";

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [flippedCards, setFlippedCards] = useState(0);
  const [totalFlips, setTotalFlips] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [timer, setTimer] = useState(null);
  const [board, setBoard] = useState([]);
  const [win, setWin] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const emojis = ["🥔", "🍒", "🥑", "🌽", "🥕", "🍇", "🍉", "🍌", "🥭", "🍍"];

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
    }
    return shuffled;
  };

  const initializeGame = () => {
    const dimension = 4;
    const picks = shuffleArray(emojis).slice(0, (dimension * dimension) / 2);
    const items = shuffleArray([...picks, ...picks]);
    setBoard(items.map((emoji, index) => ({ id: index, emoji, matched: false, flipped: false })));
    setWin(false);
    setTotalFlips(0);
    setTotalTime(0);
    setGameStarted(false);
    clearInterval(timer);
  };

  const startGame = () => {
    setGameStarted(true);
    setTimer(setInterval(() => setTotalTime((prev) => prev + 1), 1000));
  };

  const handleCardClick = (index) => {
    if (board[index].flipped || board[index].matched || flippedCards === 2) return;

    const newBoard = [...board];
    newBoard[index].flipped = true;
    setBoard(newBoard);
    setFlippedCards((prev) => prev + 1);

    if (flippedCards === 1) {
      const flipped = newBoard.filter((card) => card.flipped && !card.matched);
      if (flipped[0].emoji === flipped[1].emoji) {
        flipped[0].matched = flipped[1].matched = true;
      } else {
        setTimeout(() => {
          flipped.forEach((card) => (card.flipped = false));
          setBoard([...newBoard]);
        }, 1000);
      }
      setFlippedCards(0);
      setTotalFlips((prev) => prev + 1);
    }

    if (newBoard.every((card) => card.matched)) {
      clearInterval(timer);
      setWin(true);
    }
  };

  useEffect(() => {
    initializeGame();
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    });

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="confett">
      {win && <Confetti width={windowWidth} height={windowHeight} />}
        
      <div className="game">

        {win && (
          <div className="win-text">
            <span>
              You won! with <span className="highlight">{totalFlips}</span> moves....
            </span>
          </div>
        )}

        <div className="controls">
          <button onClick={initializeGame}>Restart</button>
          <div className="stats">
            <div className="moves">Moves: {totalFlips}</div>
            <div className="timer">Time: {totalTime} sec</div>
          </div>
        </div>

        <div className="board-container">
          <div
            className={`board ${win ? "" : "flipped"}`}
            style={{ gridTemplateColumns: `repeat(4, auto)` }}
          >
            {board.map((card, index) => (
              <div
                key={card.id}
                className={`card ${card.flipped ? "flipped" : ""} ${card.matched ? "matched" : ""}`}
                onClick={() => handleCardClick(index)}
              >
                <div className="card-front"></div>
                <div className="card-back">{card.emoji}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;

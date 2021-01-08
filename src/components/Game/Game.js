import React from "react";
import PropTypes from "prop-types";
import "./Game.scss";
import { useState } from "react";
import Board from "../Board/Board";
import { Input } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { createOptions, calculateWinner } from "../../utils/winnerRandom";

const Game = () => {
  const [showBoard, setShowBoard] = useState(false);
  const [boardSize, setBoardSize] = useState({ width: 3, length: 3 });
  const [history, setHistory] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);

  const options = createOptions(boardSize.width,boardSize.length);
  const winner = calculateWinner(history, options);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    if (winner || history[i]) return;
    const historyClone = [...history];
    historyClone[i] = xO;
    setHistory(historyClone);
    setXisNext(!xIsNext);
  };

  return (
    <>
      <div style={{ display: showBoard ? "block" : "none" }} className="Game">
        <>
          <h1>React Tic Tac Toe - With Hooks</h1>
          <Board squares={history} onClick={handleClick} />
          <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
        </>
      
      </div>
      <div className="Buttons">
          <Button
            style={{ display: !showBoard ? "block" : "none" }}
            variant="contained"
            color="primary"
            onClick={() => {
              setHistory(Array(boardSize.width * boardSize.length).fill(null));
              setShowBoard(true);
            }}
          >
            Start
          </Button>
          <Button
            style={{ display: showBoard ? "block" : "none" }}
            variant="contained"
            color="secondary"
            onClick={() => {
              setShowBoard(false);
            }}
          >
            Reset
          </Button>
          <Input
          color={"primary"}
            style={{ display: showBoard ? "none" : "" }}
            placeholder="width"
            value={boardSize.width}
            onInput={(e) => {
              setBoardSize({ ...boardSize, width: e.target.value });
            }}
          />
          <Input
            style={{ display: showBoard ? "none" : "" }}
            placeholder="length"
            value={boardSize.length}
            onInput={(e) => {
              setBoardSize({ ...boardSize, length: e.target.value });
            }}
          />
        </div>
    </>
  );
};

Game.propTypes = {};

Game.defaultProps = {};

export default Game;

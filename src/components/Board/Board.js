import React from "react";
import PropTypes from "prop-types";
import "./Board.scss";
import Square from "../Square/Square";

const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square
          value={square}
          onClick={() => {
            onClick(index);
          }}
          key={index}
        >
          {" "}
        </Square>
      ))}
    </div>
  );
};

Board.propTypes = {};

Board.defaultProps = {};

export default Board;

import Board from '../boardComponent/boardComponent'
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
  
    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }
  
    function jumpTo(nextMove) {
      setCurrentMove(nextMove);
    }
  
    const moves = history.map((squares, move) => {
      let description;
      if (move > 0) {
        description = 'Go to move #' + move;
      } else {
        description = 'Go to game start';
      }
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    });
  
    return (
      <div className='parent-bg'>
        <Container>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
          <div className='game-rules'>
            <h1>Behold... Tic Tac Toe!</h1>
            <p>Tic Tac Toe is a two-player game played on a 3x3 grid. The players take turns placing their X's or O's in empty squares, with the goal of getting three in a row. The first player to get three in a row (horizontally, vertically, or diagonally) wins the game.</p>
            <p>Tips and tricks!
              <ol>Try to block your opponent's moves by placing your symbol in a strategic spot.</ol>
              <ol>Look for opportunities to create multiple lines of three to increase your chances of winning.</ol>
              <ol>Pay attention to your opponent's moves to anticipate their strategy!</ol>
              </p>
          </div>
      </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
        <div className='footer'>
          <p>Follow <a href="https://github.com/nHarrisonW?tab=repositories">This link</a> to my Github repositories if you would like to see more of my work!</p>
        </div>
        </Container>
      </div>
    );
  }
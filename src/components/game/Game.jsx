import React from 'react';
import './game.css';

const Game = ({ imgUrl, gameInfo, text }) => (
  <div className="gs__games-container_game">
    <div className="gs__games-container_game-image">
      <img src={imgUrl} alt="game_image" />
    </div>
    <div className="gs__games-container_game-content">
      <div>
        <h3>{text}</h3>
        <p>{gameInfo}</p>
      </div>
      <div className="gs__button-container">
        <button type="button">Select</button>
      </div>
    </div>
  </div>
);

export default Game;

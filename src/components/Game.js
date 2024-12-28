import { useState } from "react";
import "../global.css";
import GameAssets from "./GameAssets";
const Game = () => {
  const [startGame, setStartGame] = useState(false);
  const startGameHandleClick = () => {
    setStartGame((prev) => !prev);
  };
  return (
    <>
      <div className="container">
        <button className="Start-Button" onClick={startGameHandleClick}>
          Start Game
        </button>
       
      </div>
      <div className="container">
      {startGame && <GameAssets />}
      </div>
    </>
  );
};
export default Game;

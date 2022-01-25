import React, { useState, useEffect } from "react";
import data from "./data.js";
import "./App.css";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [currentGameList, setCurrentGameList] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(()=>{
    shuffleImages(data)
    setCurrentGameList(data)
  },[])

    useEffect(() => {
      shuffleImages(data);
    }, [currentGameList]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGameOver(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [gameOver]);

  const handleClick = (id) => {
    const checkObject = currentGameList.find((item) => item.id === id);
    if (checkObject) {
      const newGameList = currentGameList.filter((item) => item.id !== id);
      setCurrentGameList(newGameList);
    } else {
      setGameOver(true);
      const currentScore = data.length - currentGameList.length;
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      setCurrentGameList(data);
    }
  };

  const shuffleImages = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  return (
    <main>
      <h1>Memory Game</h1>
      {gameOver && (
        <p className="game-over">
          <span className="green">Game Over</span> - Score has been reset!
        </p>
      )}
      <header>
        <h2>
          game score:{" "}
          <span className="green">
            {data.length - currentGameList.length}
          </span>
        </h2>
        <h4>
          Highest Score: <span className="green">{highScore}</span>
        </h4>
      </header>
      <div className="main-center">
        {data.map((fruit) => {
          const { id, image, name } = fruit;
          return (
            <article key={id}>
              <div className="img-container">
                <img
                  src={image}
                  alt={name}
                  className="fruit-img"
                  onClick={() => handleClick(id)}
                />
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}

export default App;

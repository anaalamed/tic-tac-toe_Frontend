import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Start from './Start';
import Game from "./game/Game"




function App() {
  const [game, setGame] = useState(null);

  function startGame({ name, code }) {
    // api request to start game

    console.log(name, code);
    setGame({
      me: {
        name: name || 'Ana',
        wins: 5
      },
      opponent: {
        name: 'Moshe',
        wins: 2
      },
      isMyTurn: false,
      mySign: 'x',
      board: [
        ['x', '', 'x'],
        ['o', 'o', 'x'],
        ['x', '', 'o']
      ]
    });
  }

  function sendPlayerMove(position) {
    // send move to api
    // check if valid 
    // return obj
      console.log(position);
  }

  function updateGameState() {
    // request ti check the game state
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Tic Tac Toe</h2>
      </header>

      {game ? (<Game game={game} onPlay={sendPlayerMove}/>) : (<Start onStart={startGame} />)}



    </div>
  )
}

export default App

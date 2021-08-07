import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Start from './start/Start';
import Game from "./game/Game"




function App() {
  const [game, setGame] = useState(null);

  function startGame({ name, code }) {
    // api request to start game
    // api/start. POST - add

    console.log(name, code);
    setGame({
      identifier: 'anaalamed', // add in headers
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
    // check if valid 
    // api/game/move. PUT - update. or post - add new move
    
  }

  function updateGameState() {
    // request ti check the game state
    // api/game/status. GET
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

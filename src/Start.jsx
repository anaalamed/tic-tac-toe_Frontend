import React, { useState } from 'react'
import './App.css'
import EnterName from "./EnterName";
import GetCode from "./GetCode";
import EnterCode from "./EnterCode";


function Start({ onStart }) {
  const [name, setName] = useState('');
  const [codeState, setCodeState] = useState(''); // get/enter
  const [code, setCode] = useState(0);

  const [game, setGame] = useState(null);

  function startGame() {
    // api request to start game
    console.log(name, code);

    onStart({ name, code });
    setGame({
      me: {
        name: name,
        wins: 5
      },
      opponent: {
        name: 'moshe',
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


  return (
    <div className="App">
      <EnterName onChange={setName} />

      { codeState ? (
        <>
          {codeState === 'get' ? (<GetCode onGive={setCode} />) : (<EnterCode onChange={setCode} />)}
          <button onClick={startGame}>Start Game</button>

        </>) :
        (<div className="buttons">
          <button onClick={() => setCodeState('get')}>get a code</button>
          <button onClick={() => setCodeState('enter')}>enter a code</button>
        </div>)
      }

      {/* <p>name is: {name}</p>
      <p>code is: {code}</p> */}

    </div>
  )
}

export default Start;

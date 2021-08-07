import React, { useState } from 'react'
import '../App.css'
import EnterName from "./EnterName";
import GetCode from "./GetCode";
import EnterCode from "./EnterCode";


function Start({ onStart }) {
  const [name, setName] = useState('');
  const [codeState, setCodeState] = useState(''); // get/enter
  const [code, setCode] = useState(0);

  async function startGame() {
    // api request to start game
    console.log(name, code);

    // const response = await fetch("http://localhost/3000/api/game/start", {
    //   body: JSON.stringify({ name, code }) // send to the server
    // })
    // game = response.json();

    // onStart({ name, code, game });
    onStart({ name, code });
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

import React  from 'react'
import Board from "./Board";
import Players from "./Players";



function Game({game, onPlay}) {



  return (
    <div className="Game">
      <Board board={game.board} onClick={onPlay}/>
      <Players me={game.me} opponent={game.opponent}/>
      {game.isMyTurn ?  (<h1>It's your turn</h1>):(<h1>It's {game.opponent.name}'s turn</h1>)}
    </div>
  )
}

export default Game;

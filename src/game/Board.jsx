import React  from 'react';
import "./Board.css";



function Board({board, onClick}) {

  return (
    <div className="Board">
      {board.map( (line, i) => (
          <div className="line">
              {line.map( (sign, j) => (<div className="cell" onClick={()=>onClick({i,j})}>{sign}</div>))}
          </div>
      ))}
    </div>
  )
}

export default Board

import React  from 'react';

function Players({me, opponent}) {

  return (
    <div className="Players">
      <h1>Players: </h1>
      <span>{me.name}: {me.wins}   </span>
      <span>{opponent.name}: {opponent.wins}</span>

    </div>
  )
}

export default Players;

import React from 'react'


function EnterName({ onChange }) {

  return (
    <div className="EnterName">
      <h1>What is your name?</h1>

      <input
        type="text"
        placeholder="Enter your name..."
        onChange={(event) => onChange(event.target.value)}
      />

    </div>
  )
}

export default EnterName

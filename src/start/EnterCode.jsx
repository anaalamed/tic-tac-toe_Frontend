import React from 'react'


function EnterCode({ onChange }) {

  return (
    <div className="EnterCode">
      <h1>What is your code?</h1>

      <input
        type="text"
        placeholder="Enter your code..."
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}

export default EnterCode

import React, { useState, useEffect } from 'react'

function GetCode({ onGive }) {
  const [code, setCode] = useState('');

  useEffect(() => {
    // get the code from server
    const givenCode = Date.now().toString().substring(5);
    console.log(givenCode);
    setCode(givenCode);
    onGive(givenCode);
  }, []);

  return (
    <div className="GetCode">
      <p>code: {code}</p>

    </div>
  )
}

export default GetCode

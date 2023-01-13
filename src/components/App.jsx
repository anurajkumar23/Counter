import React from 'react'
import { useState } from 'react'

import "./styles.css"

const App = () => {

    const [count, setCount] = useState(0);

    function increase(){
        setCount(count + 1)
    }

    function decrease(){
        setCount(count - 1)
    }


  return (
    <div className="container">
      <h1>{count}</h1>
      
      <button onClick={decrease}> - </button>
      <button onClick={increase}> + </button>
      <br/>
      <a href='/app2' >
      <div
       className="button2">SetTimer
      </div>
      </a>
      
    </div>
  )
}

export default App

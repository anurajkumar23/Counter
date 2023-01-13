import React from 'react'
import { useState } from 'react'


const App2 = () => {

    setInterval(updateTime,1000)
    const now = new Date().toLocaleTimeString()
    
    const [time, setTime] =useState(now)

    function updateTime(){
        const newTime= new Date().toLocaleTimeString()
        setTime(newTime)
    }

  return (
    <div className='container'>
      <h1 className='time'>{time}</h1>
      <div className="button2" onClick={updateTime}>GetTime</div>
    </div>
  )
}

export default App2

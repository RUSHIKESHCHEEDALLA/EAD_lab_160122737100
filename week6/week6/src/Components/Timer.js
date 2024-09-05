import React,{useState} from 'react'

const Timer = () => {
    const [time,setTime]=useState(0);
  return (
    <div>
      <h1>TIMER</h1>
      <button onClick={()=>setTime(time+1)} style={{ marginRight: '10px' }}>Start</button>
      <button onClick={()=>setTime(time-1)} style={{ marginRight: '10px' }}>Reset</button>
      <button onClick={()=>setTime(0)}>Pause</button>
      <h1>{time}</h1>
      

    </div>
  )
}

export default Timer

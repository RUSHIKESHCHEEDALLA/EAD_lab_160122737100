import { useState, useEffect } from 'react';

function Timer() {

  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    let interval = null;

    if (isActive && time >= 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (time < 0) {
      clearInterval(interval); 
    }

    return () => clearInterval(interval); 
  }, [isActive, time]);

  
  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  // Reset the timer to the initial value
  const resetTimer = () => {
    setTime(0);
    setIsActive(false);
  };

  return (
    <div style={{ textalign: 'center', marginTop: '50px' }}>
        <h1>TIMER</h1>
      <h1>{time} seconds</h1>
      <button onClick={toggleTimer}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer} style={{ marginLeft: '10px' }}>
        Reset
      </button>
    </div>
  );
}

export default Timer;
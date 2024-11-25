import { useState,useEffect } from "react";
function Timer () {
    const [time,setTime]=useState(0);
    const [isActive,setIsActive]=useState(false);
    useEffect(()=>{
        let interval=null;
        if (isActive && time>=0){
            interval = setInterval(()=>{
                setTime((prevTime)=>prevTime+1);
            },500);
        }else if(time<0){
            clearInterval(interval);
        }
        return ()=>clearInterval(interval);
    },[isActive,time]);
    const toggelTimer = ()=>{
        setIsActive(!isActive);
    }
    const resetTimer = () =>{
        setIsActive(false);
        setTime(0);
    };
    return (
        <div>
            <h1>Timer</h1>
            <h1>{time}</h1>
            <button onClick={toggelTimer} style={{marginRight:'10px'}} >{isActive ? 'Pause' : 'Start'}</button>
            <button onClick={resetTimer}>Reset</button>
            
        </div>

    );
}
export default Timer;
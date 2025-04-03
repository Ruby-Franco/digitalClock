import React, { useRef, useEffect, useState } from "react";
import Poster  from '../public/poster.svg';

export default function DigitalClock() {

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString()); 


  useEffect( ()=> {
    const updateTime = setInterval( () => {setCurrentTime(new Date().toLocaleTimeString());
    }, 1000); // 1000 ms = 1 second 

    return () => {
      clearInterval(updateTime);
    }; 
  }, []);

  if (currentTime === null) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className=" fairy-lights-container items-center min-h-screen text-white ambient-wall "> 
      <div className="fairy-lights"> 
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="fairy-light"
          style={{
            left: `${index * 10}%`, //`${xPos}%`,//
            top: `${index^2 + 7}%`,//`${yPos}px`, 
            animationDelay: `${index * 0.2}s`,
          }}
        /> ))}
      </div>

      <div className="scott-pilgram-sign"> 
        <h1> Scott Pilgram</h1>  
     </div>

      <img src="/poster.svg" className="poster" />

      <img src="/coloredPoster.svg" className="colorPoster" />
      
      <img src="/bandPic.svg" className="bandPic" />
      
      <div> 
        <p className="clock-container clock-display text-2xl ">{currentTime} </p>
      </div>
      
    </div>
  );
}

import React, { useEffect, useState } from "react";

export default function DigitalClock() {

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString()); 

  useEffect( ()=> {
    const updateTime = setInterval( () => {setCurrentTime(new Date().toLocaleTimeString());
    }, 1000); // 1000 ms = 1 second 

    return () => {
      clearInterval(updateTime);
    }; 
  }, []);
  
  return (
    
    <div>
     Digital Clock <br />
     this is completion of step two and three : {currentTime}
    </div>
  );
}

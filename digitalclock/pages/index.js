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

  if (currentTime === null) {
    return <div>Loading...</div>;
  }

  
  return (
    <div className=" items-center min-h-screen bg-gray-800 text-white"> 
      <header className="font-bold text-4xl mb-4"> Digital Clock </header> 
      <p className="text-6xl">{currentTime} </p>
    </div>
  );
}

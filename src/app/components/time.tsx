import React, { useState, useEffect } from 'react';

const Time = () => {
  const [clock, setClock] = useState("");

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      setClock(`${hours}:${minutes}:${seconds}`);
    }

    // Initial clock update and interval setting
    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return <div id="clock ">{clock}</div>;
};

export default Time;

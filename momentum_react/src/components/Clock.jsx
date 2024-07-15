import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const getClock = () => {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    getClock();
    const intervalId = setInterval(getClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <h2 id="clock">{time}</h2>;
}

export default Clock;

import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <>
      {timerExpired && <ResultModal result="lost" targetTime={targetTime} />}
      <section className="challenge">
        <h2>{title}</h2>
        <p>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"}
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Timer is running!" : "Timer is inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;

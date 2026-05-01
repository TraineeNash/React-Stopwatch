import React, { useState, useRef } from "react";

const Stopwatch = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setSeconds((prevSec) => {
          if (prevSec + 1 === 60) {
            setMinutes((prevMin) => {
              if (prevMin + 1 === 60) {
                setHours((prevHr) => prevHr + 1);
                return 0;
              }
              return prevMin + 1;
            });
            return 0;
          }
          return prevSec + 1;
        });
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  // helper to format with leading zeros
  const format = (num) => String(num).padStart(2, "0");

  return (
    <div className="bg-pink-300 flex flex-col h-screen items-center justify-center gap-2">
      {/* Timer display */}
      <div className="flex items-center text-[100px] md:text-[150px]"> {/* font mono */}
        <span className="bg-white p-2 rounded-md">{format(hours)}</span>
        <span className="px-2">:</span>
        <span className="bg-white p-2 rounded-md">{format(minutes)}</span>
        <span className="px-2">:</span>
        <span className="bg-white p-2 rounded-md">{format(seconds)}</span>
      </div>

      {/* Buttons */}
      <div className="flex gap-5 mt-6">
        {/* {!isRunning ? (
          <button
            className="bg-green-800 p-2 rounded-xl text-2xl font-bold text-white"
            onClick={start}
          >
            Start
          </button>
        ) : (
          <button
            className="bg-red-800 p-2 rounded-xl text-2xl font-bold text-white"
            onClick={stop}
          >
            Stop
          </button>
        )} */}
        <button
            className="bg-green-800 p-2 rounded-xl text-2xl font-bold text-white"
            onClick={start}
          >
            Start
        </button>
        <button
            className="bg-red-800 p-2 rounded-xl text-2xl font-bold text-white"
            onClick={stop}
          >
            Stop
        </button>
        <button
          className="bg-gray-600 p-2 rounded-xl text-2xl font-bold text-white"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;

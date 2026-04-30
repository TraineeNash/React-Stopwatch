import React, { useState, useRef } from "react"

const Stopwatch = () => {
    const [time, setTime] = useState(0)                 // counter
    const [isrunning, setisrunning] = useState(false)   // flag
    
    // reference for timer ID
    // will use with setInterval()
    const timerRef = useRef(null)                       


    const start = () => {
        if (!isrunning) {
            setisrunning(true)
            timerRef.current = setInterval(() => {
                setTime((second) => second + 1)
            }, 1000)
        }
    }

    const stop = () => {
        clearInterval(timerRef.current)
        setisrunning(false)
    }

    const reset = () => {
        clearInterval(timerRef.current)
        setisrunning(false)
        setTime(0)
    }

    return (
        <div>
            <h1>Time: {time} seconds</h1>
            <p>Running: {isrunning ? "Yes" : "No"}</p> {/* show flag */}
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Stopwatch
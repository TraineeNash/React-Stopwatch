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

    const formatTime = (seconds) => {
        const hrs = String(Math.floor(seconds / 3600)).padStart(2,"0")
        const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2,"0")
        const secs = String(seconds % 60).padStart(2,"0")
        // const secs = String(seconds).padStart(2,"0")
        return `${hrs} : ${mins} : ${secs}`
    }

    return (
        <div className="bg-pink-300 flex flex-col h-screen items-center justify-center gap-2">
            <div className="flex gap-5">
                <h1 className="bg-white text-[100px] p-2 rounded-md md:text-[150px]"
                >{formatTime(time)}</h1>
                {/* <p>Running: {isrunning ? "Yes" : "No"}</p> show flag */}
            </div>

            <div className="flex gap-5">
                <button className="bg-green-800 p-2 rounded-xl text-2xl font-bold text-white" 
                onClick={start}>
                    Start</button>
                <button className="bg-red-800 p-2 rounded-xl text-2xl font-bold text-white" 
                onClick={stop}>
                    Stop</button>
                <button className="bg-gray-600 p-2 rounded-xl text-2xl font-bold text-white" 
                onClick={reset}>
                    Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch
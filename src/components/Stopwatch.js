import React, { useState } from "react"

const Stopwatch = () => {
    const [time, setTime] = useState(0)
    const [isrunning, setisrunning] = useState(false)

    return (
        <div>
            <h1>Time: {time}</h1>
            <p>Running: {isrunning ? "Yes" : "No"}</p> {/* show flag */}
            <button onClick={() => setTime(time + 1)}>+1</button>
            <button onClick={() => setTime(0)}>Reset</button>
            <button onClick={() => setisrunning(true)}>Set Running</button>
            <button onClick={() => setisrunning(false)}>Set Not Running</button>
        </div>
    )
}

export default Stopwatch
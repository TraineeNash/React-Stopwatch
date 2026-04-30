import React, { useState } from "react"

const Stopwatch = () => {
    const [time, setTime] = useState(0)

    return (
        <div>
            <h1>Time: {time}</h1>
            <button onClick={() => setTime(time + 1)}>+1</button>
            <button onClick={() => setTime(0)}>Reset</button>
        </div>
    )
}

export default Stopwatch
import React from 'react'
import { useState, useEffect } from 'react'

function Useeffect() {

    const [counter1, setcounter1] = useState(0)
    const [counter2, setcounter2] = useState(0)

    //type-1 - execute on render and all state changes
    useEffect(() => {
        console.log("Use effect executing");
    })

    //type 2 - executes on all render and dependency of state changes
    useEffect(() => {
        console.log("Use effect executing");
    },[counter1])

     //type 3 - executes on all render only
     useEffect(() => {
        console.log("Use effect executing");
    },[])


  return (
    <div>
        <h1>{counter1}</h1>
        <h1>{counter2}</h1>

        <button onClick={() => setcounter1(counter1+1)}>Increment 1</button>
        <button onClick={() => setcounter2(counter2+1)}>Increment 2</button>
    </div>
  )
}

export default Useeffect
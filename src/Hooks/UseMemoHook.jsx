import React, { useState, useMemo } from 'react'
import Usestate from './Usestate'

export default function UseMemoHook() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    // const isOk = () => {
    //     console.log('Calling func.........')
    //    return count > 5 ?  true:false;
    // }
    const isOk = useMemo(() => {
        console.log('Calling func.........')
       return count > 5 ?  true:false;
    },[count])
    return (
        <div>
            Counter1 {count}
            <button type="button" onClick={() => setCount(count + 1)} >Count1</button>
            <span>{isOk?"Ok":"Not Ok"}</span>
            <br></br>
            Counter2 {count1}
            <button type="button" onClick={() => setCount1(count1 + 1)} >Count2</button>
        </div>
    )
}

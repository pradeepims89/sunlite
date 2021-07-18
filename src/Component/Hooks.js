import React from 'react'
import {useState, useEffect } from 'react'

 function Hook()
    {
     const [count,setCount]=useState(0);
     const [count1,setCount1]=useState(50);
     const incrementalFunction=()=>
        {
            setCount(count+1);
            //console.log('Hello');
        }
        const handleDecrement=()=>
        {
            setCount1(count1-1);
            //console.log('Hello');
        }
        useEffect(()=>{

            console.log("This is use effect function.")
          },[]);
        return (
            <div>
                 <h1>total count:{count}</h1>
                 <h1>Decrement:{count1}</h1>
                <h1> this my use Effect </h1>
                <button type="button" onClick={incrementalFunction}>Click here</button>
                <button type="button" onClick={handleDecrement}>Click here</button>
            </div>
        )
    
}
export default Hook;

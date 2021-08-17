import React, { useState } from 'react'

export default function Usestate() {
    // const [count, increment]=useState(0);
//    const hangleClick=()=>
//     {
//       increment(
         
//               count+ 1
          
//       )
//     }
const userLsit={
    id:'1',
    userName:'pradeep',
    address:'Pk'
}
const [studentList,studentinfo]=useState(userLsit);
const [roll,setRoll]=useState([]);
 
const handleClick=()=>
{
  console.log(userLsit);
}
const handleClick2=(e)=>
{
  console.log(e.target.value);
    studentinfo(
        {
            ...studentList,
         userName:e.target.value
        }
    )
}

const handleClick3=(e)=>
{
   
    studentinfo(
        {
            ...studentList,
            address:e.target.value 
        }
    )
}
const addStudent=()=>
{
   setRoll({
       ...roll,
       
   })
}
    return (
        <div>

             {/* {count} */}
            

             This is my functional conponent <br></br>
             What is const [state, setstate] = useState(initialState)<br></br>
             {/* <button type="button"  onClick={()=>increment(count+1)}>Click Here</button> */}

              <button type="button"  onClick={handleClick}>Click Here</button>
              <br></br>{studentList.userName}||
             
            
              {studentList.address}<br></br>
              <form>
                  <br></br>
                  <input type="text" name='fisrtname' onChange={handleClick2}></input>
                  <input type="text" name='lastname'  onChange={handleClick3}></input>
                 <input type="button" onClick={addStudent}  >Add student</input>
              </form>
        </div>
    )
}

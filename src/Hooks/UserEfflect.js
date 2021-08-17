import React from 'react'
import {useEffect ,useState} from 'react'

export default function UserEfflect() {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    const formDetails={
        firstname:'',
        email:''
    }
    const [details, setformdetals] = useState(formDetails);
    const [isSubmit, setIsSubmit] = useState(false);
  useEffect(()=>{
    console.log("API hit" + count + '3'+ count1);
  },[isSubmit]);
  const handleClickInc=()=>
  {
      console.log('dfdf');
  }
  const formhandler=(event)=>
  {
    //   console.log("on changed");
     setformdetals(
         { 
             ...formDetails,
               [event.target.name]:event.target.value
         }
     )
     //console.log(event.target.value)
  }

    return (
        <div>
            {count}  {count1}
            <h1>user effect.</h1>
            <button type="button" onClick={()=>setCount(count+1)}>Increment</button>
            <button type="button" onClick={()=>setCount1(count1+1)}>Increment</button>
              
              <form autoComplete="off">
                  Name:<input  type="text" name="firstname"  onChange={formhandler}   ></input> <br></br>
                  email:<input  type="text"  name="email"  onChange={formhandler}></input>
                  <br></br>
                  <input type="button"  value="submit" onClick={()=>setIsSubmit(true)} ></input>
              </form>
        </div>
    )
}

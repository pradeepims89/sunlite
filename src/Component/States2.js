import React from 'react'

export default function States2() {

//   function hanler() {
//       console.log("this is functional component")
//   }
   const hanler=()=> {
      console.log("this is functional component" ,this)
  }

    return (
        <div>

             <button type="button"   onClick={hanler} > Click Here</button>
        </div>
    )
}

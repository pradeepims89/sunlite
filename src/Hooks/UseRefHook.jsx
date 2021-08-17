import React ,{useRef}from 'react'

export default function UseRefHook() {

    const nameref = useRef()

   const clickHandler=()=>
   {
       console.log(nameref)
       nameref.current.focus()
   }
    return (
        <div>
            <input  type="text" id="gg" className="34" name="firstname" ref={nameref}></input> <br>
            </br>
            <input type="button" value="submit"  onClick={clickHandler}></input>
        </div>
    )
}

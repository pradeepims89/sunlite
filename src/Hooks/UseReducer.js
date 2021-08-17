import React, {useReducer} from 'react'

export default function UseReducer() {
 
    const initialState=0;
    const reducer=(state , action)=>
    {
        if(action.type=='ADD')
        {
         return state+1
        }
        if(action.type=='SUB')
        {
         return state-1
        }
      return   state;
    }
     const [state, dispatch] = useReducer(reducer, initialState)
      

    //  const clckHandler=()=>
    //  {

    //  }
    return (
        <div>
            Introduction reduce hooks
             {state}
            <input type="button" value="Add"  onClick={()=>dispatch({type:'ADD'})} ></input>
            <input type="button" value="Sub"  onClick={()=>dispatch({type:'SUB'})} ></input>
        </div>
   
    )
}

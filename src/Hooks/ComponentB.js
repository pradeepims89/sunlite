import React from 'react'
import  Context , {Consumer} from './Context'

export default function ComponentB() {
    return (
        <div>
        This is component B.
        <Consumer>
                {
                    (data)=>{
                      return  <div>

                         
                      <h1>{data.id}</h1> 
                      <h1>{data.name}</h1> 
                      </div>
                    }
                }
            </Consumer>
    </div>
    )
}

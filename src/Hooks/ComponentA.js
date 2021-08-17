import React from 'react'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'
import  {Provider} from './Context'
export default function ComponentA() {

    const datapass={
        id:"10002",
        name:"Sandeep",
        department:"HR"
        };
        
    return (
        <div>
            <h3>Intoduction UseContext of react hooks</h3>
            This is component A.
                     <Provider value={datapass} >
                     <ComponentB></ComponentB>
                     </Provider>
                    <ComponentC></ComponentC>
                    
                    
        </div>
    )
}

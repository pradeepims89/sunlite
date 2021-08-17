import React from 'react'
import { useLocation,useHistory } from 'react-router-dom'
export default function Test3() {
    const location=useLocation();
    const history=useHistory();
    // console.log(location);
    // console.log(location.pathname);
    return (
        <div>
            This test-3 page 
            {location.pathname}
            <button   value="Go back" onClick={history.goBack}> Go back</button>
            <button   value="Login" onClick={()=>history.push('./Test2')}> Login</button>
        </div>
    )
}

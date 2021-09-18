import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import UserLogin from '../UserLogin'
export default function Navigatin() {
    return (
        <div>
                <Route exact path="/" component={UserLogin}></Route>
                {/* <Route exact path="/Home" component={Home}></Route>
                <Route path="/About" component={About}></Route>
                <Route path="/Content" component={Content}></Route> */}
        </div>
    )
}

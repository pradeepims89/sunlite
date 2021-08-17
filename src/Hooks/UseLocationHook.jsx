import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Test1 from './Test1'
import Test2 from './Test2'
import Test3 from './Test3'

function UseLocationHook() {
    return (
        <div>
            hjkhkhk
            <Link to='/Test1'>Test-1</Link><br></br>
            <Link to='/Test2'>Test-2</Link><br></br>
            <Link to='/Test3'>Test-3</Link><br></br>

            <Switch>
            <Route path="/" exact={true} component={Test1}></Route>
                <Route path="/Test1" component={Test1}></Route>
                <Route path="/Test2" component={Test2}></Route>
                <Route path="/Test3" component={Test3}></Route>
            </Switch>


        </div>

    )
}
export default UseLocationHook

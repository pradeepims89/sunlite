import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


const Home = () => {
    return <h1>Home page</h1>
}
const About = () => {
    return <h1>About page</h1>
}
const Content = () => {
    return (
    <div>
         <ul className="navbar-nav mr-auto">
            <li className="nav-item"><NavLink className="nav-link bg-primary" activeClassName="active" to="/Content/city" >Abput</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link bg-primary" activeClassName="active" to="/Content/sports" >Content</NavLink></li>
        </ul>
         <Route path="/Content/:name" component={contentDetails}></Route>
         </div>
    )
}
const contentDetails=(props)=>
{
 return   (
      <div>
       {
       props.match.params.name? <div>
           <img src={'https://lorempixel.com/400/200/'+props.match.params.name+'/1/'}></img>
           </div>:null
       }
      </div>
 )
}
const Links = () => {
    return (
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><NavLink className="nav-link  bg-primary" exact activeClassName="active" to="/" >Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link bg-primary" activeClassName="active" to="/About" >Abput</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link bg-primary" activeClassName="active" to="/Content" >Context</NavLink></li>
                </ul>
           )
}


export default class Routes extends Component {



    render() {
        return (
             <div className="row">
            <Router>
                <section className="col-sm-4">
                <Links></Links>
                </section>
                <section className="col-sm-8">
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/Home" component={Home}></Route>
                <Route path="/About" component={About}></Route>
                <Route path="/Content" component={Content}></Route>
            </section>
            </Router>
            </div>
        )
    }
}

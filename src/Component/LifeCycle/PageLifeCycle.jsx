import React, { Component } from 'react'
import PageLifeCycleChild from './PageLifeCycleChild'

export default class PageLifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: 'PK',
            lastname: 'Kumar'
        }
        console.log("This constructor....................... ");
    }
    static getDerivedStateFromProps(nextProps, state) 
        {
            console.log(nextProps.name);
          //  console.log(this.props.name);
            // if(nextProps.firstName==props.name)
            // {
            // // this.setState(
            // //     {
            // //         firstName:'ok'
            // //     }
            // // )
            // }
            console.log("This getDerivedStateFromProps....................... ");
            console.log(nextProps);
            console.log(state);
            return null;
        }
        componentDidMount()
        {
            console.log("This componentDidMount....................... ");
        }
        render() {
            console.log('This render.......................');
            return (
                <div>
                    {/* <PageLifeCycleChild></PageLifeCycleChild> */}
                     {this.props.name }==========
                    Life cycle  {this.state.firstName}
                </div>
            )
        }
    }

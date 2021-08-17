import React, { Component } from 'react'

export default class PageLifeCycleChild extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: 'PK',
            lastname: 'Kumar'
        }
        console.log("This  child constructor....................... ");
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
            console.log("This  child getDerivedStateFromProps....................... ");
            console.log(nextProps);
            console.log(state);
            return null;
        }
        componentDidMount()
        {
            console.log("This  child componentDidMount....................... ");
        }
        render() {
            console.log('This  child render.......................');
            return (
                <div>
                     {this.props.name }==========
                    Life cycle  {this.state.firstName}
                </div>
            )
        }
    }

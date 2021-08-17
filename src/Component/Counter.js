import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:0
        }
    }
    handleClick=(e)=>
    {
       e.preventDefault();
       this.setState({
           count:this.state.count+1
       });
    }
    render() {
        return (
            <div>
                This is my couter program
                {this.props.children(this.state.count, this.handleClick)}
            </div>
        )
    }
}

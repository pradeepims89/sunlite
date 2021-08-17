import React, { Component } from 'react'

export default class RenderProps extends Component {
    
    render() {
         const {c,fn}=this.props;
        return (
            <div>
                <h1>{this.props.c}</h1>
                {/* <h1>{this.props.renders(false)}</h1> */}
                <br></br> No of clicks counts:{c}<br></br>
                <button type="button" onClick={fn}>Click here</button>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Wrapper from './Wrapper';

class RenderProps2 extends Component {
   
    render() {
         const {c, fn}=this.props;
        return (
            <div>
                <h1>{this.props.c}</h1>
                <h1>{this.props.name}</h1>
                <h1>{this.props.id}</h1>
                <h1>{this.props.jj}</h1>
                <br></br> No of clicks counts:{c}<br></br>
                <button type="button" onMouseEnter={fn}>Click hover</button>
            </div>
        )
    }
}
export default   Wrapper(RenderProps2)

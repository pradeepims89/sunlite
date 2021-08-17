import React, { Component } from 'react'

const Wrapper=(OriginalComponet)=>
{
    class newComp extends React.Component
    {
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
            return <OriginalComponet c={this.state.count} fn={this.handleClick} {...this.props} />
        }
    }
    return newComp;
}
export default Wrapper;


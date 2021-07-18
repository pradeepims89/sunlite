import React, { Component, PureComponent } from 'react'

export default class Pure extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        console.log("................Pure.................");
        return (
            <div>
                 This is my pure Component 
            </div>
        )
    }
}

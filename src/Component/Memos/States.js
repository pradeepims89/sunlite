import React, { Component } from 'react'

export default class States extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             FirtName:'Pradeep',
             LastName:'Kumar',
             Count:1
        }
        //this.handleClick2=this.handleClick2.bind(this);
    }
    //When update state and props
    // handleClick=()=>
    // {
    //     this.setState({
    //         FirtName:'Yadav'
    //     });
    // }
     handleClick()
    {
        this.setState({
            FirtName:'Yadav'
        });
    }
    
    handleClick2()
    {
    console.log("Simple function  binding" ,this)
    }
    render() {
        return (
            <div>
                 Name: {this.state.FirtName} -{this.state.LastName}
                 <button type="button" id="btn1" onClick={()=>this.handleClick2()} >
                     Click here1
                 </button>
                 {/* <button type="button" id="btn" onClick={this.handleClick.bind(this)} >
                     Click here
                 </button> */}
                  {/* <button type="button" id="btn" onClick={()=>this.handleClick} >
                     Click here
                 </button>  */}
            </div>
        )
    }
}

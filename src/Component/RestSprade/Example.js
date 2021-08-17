import React, { Component } from 'react'

export default class Example extends Component {
    render() {
    
    const student={
    name:"pradeep",
    address:"Unnao",
     Grade:['A','B','C']
    };

    var array=['a','b','c'];

    // const {name,...rest}=student;
    // console.log(name);
    // console.log(rest);
    var newArray=['l', ...array ,'gh','f']
    console.log(newArray);
        return (
            <div>
                
            </div>
        )
    }
}

import React, { PureComponent ,Component } from 'react'
import Memo from '../Memos/Memo';
import  Narmal from './Narmal'
import  Pure from './Pure'

export default class Parent extends Component {
 constructor(props)
 {
     super(props);
     this.state={
     Name:"pradeep"
     }
 }
 handlerClick=()=>
{
// console.log("clicked");
this.setState({
  Name:"Yadav"
});
}

// shouldComponentUpdate(nextProps ,nextState)
// {
//     console.log(".....................Should component update......................")
//     return false;
// }
    render() {

        console.log("Render method is called");
        return (
            <div>
                
                <h1>{this.state.Name}</h1>
        <button type="button" onClick={this.handlerClick}>Click here</button>
            This is the parent componet

             {/* <Narmal>

             </Narmal>
             <Pure></Pure> */}
             {/* <Narmal name={this.state.Name}></Narmal>
             <Memo name={this.state.Name}></Memo> */}
            </div>
        )
    }
}

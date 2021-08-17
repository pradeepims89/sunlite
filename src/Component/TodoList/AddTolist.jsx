import React, { Component } from 'react'
import { Button } from 'react-bootstrap'


class AddTolist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todoText:''
        }
    }
    handleChange=(event)=>
    {
        this.setState({
            todoText:event.target.value

        })
    //    e.preventDefault();
    }
    handleSubmit=(e)=>
    {
        e.preventDefault();
        this.props.addTodoslist(this.state.todoText);

        this.setState({
            todoText:''
        })
    }
    render() {
       
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                <input type="text" name="todos" value={this.state.todoText} 
                onChange={this.handleChange}></input>
                <button type="submit" value="add todos"  
                >Add todos</button>
                 </form>
            </div>
        )
    }
}
export default AddTolist;
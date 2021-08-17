import React, { Component } from 'react'
import AddTolist from './AddTolist'
import TodoItems from './TodoItems'
export default class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          text: "By milk",
          Completed: true
        },
        {
          text: "My Milk",
          Completed: true
        }
        ,
        {
          text: "By Mango",
          Completed: false
        }
      ]
    }
  }
  addTodoslist = (text) => {
    const newTodos = this.state.todos.concat({
      text,
      Completed: false
    });
    console.log(newTodos);
    this.setState({
      todos: newTodos
    });
  }
  toToggletodos = (index) => {
    const newtodos = this.state.todos.map((item, i) => {
      if (index === i) {
        return ({
          ...item,
          Completed: !item.Completed
        })
      }
      return item;
    })
    this.setState(
      {
        todos: newtodos
      }
    )
  }

  toDeleteToggletodos = (index) => {
    const newtodos = this.state.todos.filter((item, i) => {
      if (index === i) {
        return false
      }
      return true;
    })
    this.setState(
      {
        todos: newtodos
      }
    )
  }
  toEdittodos = (index,newText) => {
    const newtodos = this.state.todos.map((item, i) => {
      if (index === i) {
        return (
          {
            ...item,
            text:newText
          }
        )
      }
    
      return item;
    })
    this.setState(
      {
        todos: newtodos
      }
    )
  }

  
  render() {
    return (
      <div>
        My to List{this.state.todos.map((item, index) => {
          return <TodoItems
            item={item}
            key={index}
            index={index}
            toToggletodos={this.toToggletodos}
            toDeleteToggletodos={this.toDeleteToggletodos}
            toEdittodos={this.toEdittodos}
            >
          </TodoItems>
        })}
        <AddTolist addTodoslist={this.addTodoslist}></AddTolist>
      </div>
    )
  }
}

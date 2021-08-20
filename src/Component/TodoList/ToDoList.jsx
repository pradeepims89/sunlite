import React, { Component } from 'react'
import AddTolist from './AddTolist'
import TodoItems from './TodoItems'
import  axios from 'axios'
import Firstname1,{Lastname, MidleName} from '../../ImportExport/Import'
import { Last } from 'react-bootstrap/esm/PageItem'
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
  // componentDidMount()
  // {
  //     axios.get('https://jsonplaceholder.typicode.com/todos/2')
  //     .then(function (response) {
  //       console.log(response.data)
  //       // handle success
  //       //console.log(response.data.title);
  //        this.setState({
  //          todos:response.data
  //        })
  //        this.setState(
  //         {
  //           todos: response.data
  //         }
  //       )
        
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  // }
  
  render() {
    return (
      <div>
        My to List
       {Firstname1} {MidleName}{Lastname}
        {this.state.todos.map((item, index) => {
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

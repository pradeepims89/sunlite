import React, { Component } from 'react'

class TodoItems extends Component {
    constructor(props) {
        super(props)

        this.state = {
            IsEditable: false
            
        }
        this.newText = React.createRef();
    }
    onToggle = () => {
        this.props.toToggletodos(this.props.index);
    }
    onDeleteToggle = () => {
        this.props.toDeleteToggletodos(this.props.index);
    }
    onEditToggle = (e) => {
        this.setState({
            IsEditable: !this.state.IsEditable
        });
    }

    editSubmiHandler = (e) => {
        e.preventDefault();
          const vl=this.newText.current.value
        this.props.toEdittodos(this.props.index,vl)
        this.onEditToggle();
    }

    render() {
        const { item } = this.props;
        if (this.state.IsEditable == true) {
            return (
                <div>
                    <form onSubmit={this.editSubmiHandler}>
                        <input type="text"  defaultValue={item.text} ref={this.newText} ></input>
                        <button type="submit"  >Save</button>
                        <button onClick={this.onEditToggle} >Cancel</button>

                    </form>
                </div>
            )
        }
        return (
            <div>
                <li>
                    <span onClick={this.onToggle}
                        className={item.Completed ? "Completed" : ""}> {item.text}</span>

                    <span onClick={this.onEditToggle}>
                        <button type="submit">Edit</button>
                    </span>
                    <span onClick={this.onDeleteToggle}>
                        <button type="submit">Delete</button>
                    </span>

                </li>
            </div>
        )
    }
}
export default TodoItems;
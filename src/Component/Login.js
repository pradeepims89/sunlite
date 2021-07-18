import React, { Component } from 'react'
import  {Button}  from 'react-bootstrap';
import {Form} from 'react-bootstrap'
import './Login.css'

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email:''
        }
        //this.formOnsubmitHndler=this.formOnsubmitHndler.bind(this);
        //this.FormOnchangehandler = this.FormOnchangehandler.bind(this)
    }
    

    formOnsubmitHndler(event)
    {
      event.preventDefault();
      console.log(this.state);
    }
    FormOnchangehandler(event)
    {
       this.setState({
          [event.target.name]:event.target.value
       });
    }

    render() {

         //const[name, email]=this.state;
         return (
            <div className="Login">
              <Form >
                <Form.Group size="lg" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    autoFocus
                    type="email"
                    
                  />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                   
                  />
                </Form.Group>
                <Button block size="lg" type="submit" >
                  Login
                </Button>
              </Form>
            </div>
          );
    }
}

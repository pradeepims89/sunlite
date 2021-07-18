import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap'
import './Login.css'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      password: '',
      nameError:'',
      emailError:'',
    }
    this.formOnsubmitHndler=this.formOnsubmitHndler.bind(this);
    this.FormOnchangehandler = this.FormOnchangehandler.bind(this)
  }
  formOnsubmitHndler(event) {
    const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({
      nameError:'',
      emailError:'',
    });
    event.preventDefault();
    console.log(event.target.userName);
    if(this.state.userName=='')
    {
      this.setState({
        emailError:"Please enter email id.."
      });
    }
     if(this.state.password=='')
    {
      this.setState({
        nameError:"Please enter password."
      });
    }
    else if(!validateEmail.test(this.state.userName))
    {
      this.setState({
        emailError:"Please enter valid email id"
      });
    }
    return  true;
  }
  FormOnchangehandler(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {

    const{userName, password,emailError,nameError}=this.state;
    return (
      <div className="Login">
        <Form  onSubmit={this.formOnsubmitHndler} >
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="text"

            name="userName" value={userName} onChange={this.FormOnchangehandler} />
             
             {
               emailError.length>0 && 
               <Form.Label className="errorMessage">{emailError}</Form.Label>
             }
          </Form.Group>
          
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"

              name="password" value={password} onChange={this.FormOnchangehandler}  />
              {
               nameError.length>0 && 
               <Form.Label className="errorMessage">{nameError}</Form.Label>
             }
          </Form.Group>
          <Button block size="lg" type="submit" >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

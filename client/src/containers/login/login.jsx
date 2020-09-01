import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, Label, Input } from "reactstrap";
import { notification } from 'antd';
import { MDBBtn } from "mdbreact";
import { login } from "../../redux/actions/users";
import "./login.scss";
import getHistory from '../../history'; 



const Login = (props) => {

  const history = useHistory();
  const [isRed, setIsRed] = useState(false)
  const [passwordError, setPasswordError] = useState('')
  const emailInputRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    login(credentials)
            .then(() => {
              notification.success({ message: 'Login success', description: 'Te has logeado con éxito.' })
                setTimeout(() => {
                  getHistory().push('/home');
                }, 1000);
            }).catch(error => {
              console.log(error)
              
              alert({ message: 'Login failed', description: 'Login failed' });
            });
    console.log(credentials);

  };

 

  return (
    <div className="login_container">
      <form onSubmit={onSubmit} className="form-inline">
      
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">
              Email
            </Label>
            <Input
              type="email" 
              ref={emailInputRef}
              style={{
                  backgroundColor: isRed ? 'red' : 'white'
              }}
              name="email"
              id="exampleEmail"
              placeholder="something@idk.cool"
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="don't tell!"
            />
          </FormGroup>
          
          
        
          <MDBBtn flat type="submit" className="login-button text-orange">
            LOGIN
         </MDBBtn>
         
      </form>
      <div className="password_error">
        {passwordError}
      </div>
    </div>
  );
};

export default Login;

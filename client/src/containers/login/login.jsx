import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
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
              notification.success({ message: 'Login success', description: 'Successfully logged in' })
                setTimeout(() => {
                  getHistory().push('/home');
                }, 1000);
            })
            .catch(error => {
              const errorMsg = error.response?.data?.message;
              notification.error({ message: 'Login failed', description: errorMsg });
            });
    console.log(credentials);

  };

  useEffect(() => {
    console.log(emailInputRef.current)
    setTimeout(() => {
        emailInputRef.current.backgroundColor = 'red';
        setIsRed(false)
    }, 2000);
}, [])
const validatePassword = event => {
    if (event.target.value.length < 8) {
        setPasswordError('Password must be at least 8 characters');
    }else{
        setPasswordError('')
    }
}

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
              onKeyUp={validatePassword}
              name="password"
              id="examplePassword"
              placeholder="don't tell!"
            />
          </FormGroup>
          
          
        
          <MDBBtn flat type="submit" className="login-button text-white">
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

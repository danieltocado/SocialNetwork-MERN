import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { MDBBtn } from "mdbreact";
import { login } from "../../redux/actions/users";
import "./login.scss";

const Login = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();
    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    login(credentials)
      .then(() => {
        setTimeout(() => {
          //props.history.push('/')
        }, 1000);
      })
      .catch((error) => {
        //
      });
    console.log(credentials);
  };

  return (
    <div className="container-login">
      <form onSubmit={onSubmit}>
        <Form inline className="align-right text-white text-right">
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">
              Email
            </Label>
            <Input
              type="email"
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
          <MDBBtn flat type="submit" className="login-button text-white">
            LOGIN
         </MDBBtn>
        </Form>
      </form>
    </div>
  );
};

export default Login;

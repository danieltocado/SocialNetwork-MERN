import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../login/login";
import HomeRegister from "../../components/home-register/home-register.jsx";
import "../home/home.scss";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
    
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
    
  }


  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar
              fixed="top"
              dark
              expand="md"
              transparent
            >
              <MDBNavbarBrand href="/">
                <strong>Social Network</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && (
                <MDBNavbarToggler onClick={this.onClick} />
              )}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <Login />
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
                
        </header>

        <main>
          <MDBView src="https://wallpaperaccess.com/full/1612457.jpg">
            <MDBMask
              overlay="purple-light"
              className="align-center flex-column text-white text-center " 
            >
            <div className="register-center">
                <HomeRegister/>
            </div>  
            </MDBMask>
          </MDBView>
          <MDBContainer className="text-center my-5">
            <p align="justify">
              Holas
            </p>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default Home;

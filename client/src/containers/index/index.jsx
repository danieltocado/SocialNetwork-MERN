import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../login/login";
import HomeRegister from "../../components/home-register/home-register.jsx";
import "../index/index.scss";


class Index extends React.Component {
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
      <div className="index_container">
        
        <div className="left_container">
        
          <div className="info_container">
            <p>info</p>
            <p>info</p>
            <p>info</p>
            <p>info</p>
            <p>info</p>
            <p>info</p>
            <p>info</p>
            
          </div>

        </div>

        <div className="right_container">
          
          <div className="login_container">
            <Login/>
          </div>
          <div className="register_container">
            <HomeRegister/>
          </div>
        </div>

      </div>
    );
  }
}

export default Index;

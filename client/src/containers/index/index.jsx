import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../login/login";
import HomeRegister from "../../components/home-register/home-register.jsx";
import "../index/index.scss";

class Index extends React.Component {
 
  render() {
    return (
      <div className="index_container">
        <div className="left_container">
          <div className="info_container">
            <div className="info_subcontainer">
              <div className="info">
                <i class="fas fa-search"></i>
                <p>Sigue lo que te interesa.</p>
              </div>
              <div className="info">
                <i class="fas fa-users"></i>
                <p>Entérate de qué está hablando la gente.</p>
              </div>
              <div className="info">
                <i class="fas fa-comments"></i>
                <p>Únete a la conversación.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="right_container">
          <div className="login_container">
            <Login />
          </div>
          <div className="register_container">
            <HomeRegister />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;

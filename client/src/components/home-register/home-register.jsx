import React from "react";
import Register from '../../containers/register/register.jsx';

import "../home-register/home-register.scss"


class HomeRegister extends React.Component {
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

<div className="mask rgba-gradient align-items-center">
              
              <div className="container">
               
                <div className="row mt-6">

                  <div className="col-md-8 col-xl-12 mb-4 black-text">
                   
                    <div className="card wow fadeInRight" data-wow-delay="0.3s">

                      <div className="card-body register-card">
           
                        <Register/>
                        
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
             
            </div> );
  }
}

export default HomeRegister;

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

<div class="mask rgba-gradient align-items-center">
              
              <div class="container">
               
                <div class="row mt-6">
                 
                  <div class="col-md-6 mt-md-0 mt-5  text-center text-md-left">
                    <h1 class="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s">Sign up right now! </h1>
                    <hr class="hr-light wow fadeInLeft" data-wow-delay="0.3s"/>
                    <h6 class="mb-3 wow fadeInLeft" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga
                    nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea
                    dolor molestiae, quisquam iste, maiores. Nulla.</h6>
                    <a class="btn btn-outline-white wow fadeInLeft" data-wow-delay="0.3s">Learn more</a>
                  </div>
               
                  <div class="col-md-6 col-xl-5 mb-4 black-text">
                   
                    <div class="card wow fadeInRight" data-wow-delay="0.3s">

                      <div class="card-body register-card">
           
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

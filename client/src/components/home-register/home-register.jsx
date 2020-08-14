import React from "react";

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
                 
                  <div class="col-md-6 mt-md-0 mt-5 white-text text-center text-md-left">
                    <h1 class="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s">Sign up right now! </h1>
                    <hr class="hr-light wow fadeInLeft" data-wow-delay="0.3s"/>
                    <h6 class="mb-3 wow fadeInLeft" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga
                    nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea
                    dolor molestiae, quisquam iste, maiores. Nulla.</h6>
                    <a class="btn btn-outline-white wow fadeInLeft" data-wow-delay="0.3s">Learn more</a>
                  </div>
               
                  <div class="col-md-6 col-xl-5 mb-4 black-text">
                   
                    <div class="card wow fadeInRight" data-wow-delay="0.3s">

                      <div class="card-body text">
                        
                        <div class="text-center">
                          <h3 class="white-text">
                            <i class="fas fa-user white-text"></i> Register:</h3>
                          <hr class="hr-light"/>
                        </div>
                       
                        <div class="md-form">
                          <i class="fas fa-user prefix white-text active"></i>
                          <input type="text" id="form3" class="white-text form-control"/>
                          <label for="form3" class="active">Your name</label>
                        </div>
                        <div class="md-form">
                          <i class="fas fa-envelope prefix white-text active"></i>
                          <input type="email" id="form2" class="white-text form-control"/>
                          <label for="form2" class="active">Your email</label>
                        </div>
                        <div class="md-form">
                          <i class="fas fa-lock prefix white-text active"></i>
                          <input type="password" id="form4" class="white-text form-control"/>
                          <label for="form4">Your password</label>
                        </div>
                        <div class="text-center mt-4">
                          <button class="btn btn-indigo">Sign up</button>
                          <hr class="hr-light mb-3 mt-4"/>
                          <div class="inline-ul text-center">
                            <a class="p-2 m-2 tw-ic">
                              <i class="fab fa-twitter white-text"></i>
                            </a>
                            <a class="p-2 m-2 li-ic">
                              <i class="fab fa-linkedin-in white-text"> </i>
                            </a>
                            <a class="p-2 m-2 ins-ic">
                              <i class="fas fa-instagram white-text"> </i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
             
            </div> );
  }
}

export default HomeRegister;

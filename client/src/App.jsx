import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { getInfo } from "./redux/actions/users";

//Components
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'

//Containers
import Register from './containers/register/register.jsx'
import Login from './containers/login/login.jsx'
import Home from './containers/home/home.jsx'
import HomeRegister from "./components/home-register/home-register.jsx";
import Index from "./containers/index/index.jsx";
import FileUpload from "./containers/fileupload/fileupload.jsx"


function App() {

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if(token){
     getInfo()
     .catch(() => localStorage.removeItem('authToken'))
    }
  }, [])

  return (
    
    <BrowserRouter>
    
    <Switch>
      <Route path="/" exact component={Home} /> 
      <Route path="/home-register" exact component={HomeRegister} /> 
      <Route path="/home" exact component={Index} /> 
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/upload" exact component={FileUpload} />

    </Switch>
    
  </BrowserRouter>
  );
}

export default App;

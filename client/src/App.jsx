import React, { useEffect, Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalHistory } from './history';

import './App.css';
import { getInfo } from "./redux/actions/users";
import 'antd/dist/antd.css'; 


//Components

import Footer from './components/footer/footer.jsx'

//Containers
import Register from './containers/register/register.jsx'
import Login from './containers/login/login.jsx'
import Index from './containers/index/index.jsx'
import HomeRegister from "./components/home-register/home-register.jsx";
import Home from "./containers/home/home.jsx";
import FileUpload from "./containers/fileupload/fileupload.jsx"
import Sidebar from "./components/sidebar/sidebar";
import ProtectedRoute from './components/protectedRoute/protectedRoute'
import ProtectedRoute2 from './components/protectedRoute/protectedRoute2'
import Profile from "./containers/profile/profileview";


class App extends Component {

 /* useEffect(() => {
    const token = localStorage.getItem('authToken');
    if(token){
     getInfo()
     .catch(() => localStorage.removeItem('authToken'))
    }
  }, []) */

  render(){
  return (
    
    <BrowserRouter >
    <GlobalHistory />
    <Switch >
      <ProtectedRoute2 path="/" exact component={Index} /> 
      <ProtectedRoute path="/home" exact component={Home} />
      <ProtectedRoute path="/profile" exact component={Profile} />  
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/upload" exact component={FileUpload} />
      
      <Route path="/sidebar" exact component={Sidebar} />

    </Switch >
    
  </BrowserRouter>
  )};
}

export default App;

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalHistory } from './history';

import 'antd/dist/antd.css'; 
import './App.css';


//Containers
import Register from './containers/register/register.jsx'
import Login from './containers/login/login.jsx'
import Index from './containers/index/index.jsx'
import Home from "./containers/home/home.jsx";
import FileUpload from "./containers/fileupload/fileupload.jsx"
import Sidebar from "./components/sidebar/sidebar";
import ProtectedRoute from './components/protectedRoute/protectedRoute'
import ProtectedRoute2 from './components/protectedRoute/protectedRoute2'
import ProfileView from "./containers/profile/profileview";
import UserFeed from "./containers/feed-user/feed-userview";
import Explore from "./containers/explore/explore"
import { connect } from 'react-redux'



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
        <ProtectedRoute path="/profile" exact component={ProfileView} />
        <ProtectedRoute path="/explore" exact component={Explore} />    
        <Route path="/:username" exact component={UserFeed} />
        
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/upload" exact component={FileUpload} />
        <Route path="/sidebar" exact component={Sidebar} />
      </Switch >
    
  </BrowserRouter>
  )};
}

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps)(App)

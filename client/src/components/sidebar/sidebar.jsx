import React from "react";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import "./sidebar.scss"
import SidebarCategory from "./sidebarcategory.jsx";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from "@material-ui/core"
import { logout } from "../../redux/actions/users"

function Sidebar() {

  const user = useSelector(state => state.user);

  console.log('Id del usuario logeado ' + user._id)

  return (
    <div className="sidebar">
      <h1>Online Meeting</h1>
      <div className="sidebar_categories">
        <div className="sidebar_categories_top">
          <NavLink activeClassName="activeLink" className="category" exact to="/home"><HomeOutlinedIcon fontSize="large"/> <span className="category_name"> Inicio</span></NavLink>
          <NavLink activeClassName="activeLink" className="category" exact to="/explore"><SearchIcon fontSize="large"/>  <span className="category_name">Explorar</span></NavLink>
          <NavLink activeClassName="activeLink" className="category" exact to="/profile"><AccountBoxOutlinedIcon fontSize="large"/> <span className="category_name">Editar perfil</span></NavLink>
          <NavLink activeClassName="activeLink" className="category" exact to={"/" + user.username}><PersonOutlineOutlinedIcon fontSize="large"/> <span className="category_name">{user.username}</span></NavLink>
        </div>
        <div className="sidebar_categories_bottom">
          <Button variant="outlined" className="sidebar__tweet" fullWidth onClick={logout}>Logout</Button>
        </div>
      </div>
      
    </div>
  )
}

export default Sidebar;

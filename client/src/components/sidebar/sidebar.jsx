import React from "react";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import "./sidebar.scss"
import SidebarCategory from "./sidebarcategory.jsx";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import { Button } from "@material-ui/core"
import { logout } from "../../redux/actions/users"

function Sidebar() {

  const user = useSelector(state => state.user);

  console.log('Id del usuario logeado ' + user._id)

  return (
    <div className="sidebar">
      <h1>SIDEBAR</h1>

      <NavLink activeClassName="activeLink" className="category" exact to="/home"><HomeOutlinedIcon/> Inicio</NavLink>
      <NavLink activeClassName="activeLink" className="category" exact to="/explore"><PeopleAltOutlinedIcon/> Explorar</NavLink>
      <NavLink activeClassName="activeLink" className="category" exact to="/profile"><AccountBoxOutlinedIcon/>Editar perfil</NavLink>
      <NavLink activeClassName="activeLink" className="category" exact to={"/" + user.username}><PersonOutlineOutlinedIcon/>{user.username}</NavLink>
      <Button variant="outlined" className="sidebar__tweet" fullWidth onClick={logout}>Logout</Button>
      
      
    </div>
  )
}

export default Sidebar;

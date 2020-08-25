import React from "react";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import "./sidebar.scss"
import SidebarCategory from "./sidebarcategory.jsx";
import HomeIcon from "@material-ui/icons/Home"
import { Button } from "@material-ui/core"
import { logout } from "../../redux/actions/users"

function Sidebar() {

  const user = useSelector(state => state.user);

  return (
    <div className="sidebar">
      <h1>SIDEBAR</h1>

      <NavLink exact to="/home"><SidebarCategory active text="Inicio"/></NavLink>
      <NavLink exact to="/explore"><SidebarCategory text="Explorar"/></NavLink>
      <NavLink exact to="/notifications"><SidebarCategory text="Notificaciones"/></NavLink>
      <NavLink exact to="/messages"><SidebarCategory text="Mensajes"/></NavLink>
      <NavLink exact to="/profile"><SidebarCategory text="Perfil"/></NavLink>
      <Button variant="outlined" className="sidebar__tweet" fullWidth onClick={logout}>Logout</Button>
      
      <div className="btns">
          {user?._id
          
          ?
            
                <button className="btn_login">{user.name || user.email}</button>
              
          :
            <p>no se ha encontrado user </p>
          }
        </div>
    </div>
  )
}

export default Sidebar;

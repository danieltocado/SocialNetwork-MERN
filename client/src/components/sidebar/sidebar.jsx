import React from "react";
import { useSelector } from 'react-redux';
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

      <SidebarCategory active Icon={HomeIcon} text="Home"/>
      <SidebarCategory text="Explore"/>
      <SidebarCategory text="Notifications"/>
      <SidebarCategory text="Messages"/>
      <SidebarCategory text="Booksmarks"/>
      <SidebarCategory text="Profile"/>
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

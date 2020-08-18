import React from "react";
import "./sidebar.scss"
import SidebarCategory from "./sidebarcategory.jsx";
import HomeIcon from "@material-ui/icons/Home"
import { Button } from "@material-ui/core"

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>SIDEBAR</h1>

      <SidebarCategory active Icon={HomeIcon} text="Home"/>
      <SidebarCategory text="Explore"/>
      <SidebarCategory text="Notifications"/>
      <SidebarCategory text="Messages"/>
      <SidebarCategory text="Booksmarks"/>
      <SidebarCategory text="Lists"/>
      <SidebarCategory text="Profile"/>
      
    <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar;

import React from 'react'
import "./sidebar.scss"

function SidebarCategory({ active, text, Icon }) {
    return (
        <div className={`category ${active && 'category--active'}`}>
            {Icon}
            <h2 activeClassName="activeLink">{text}</h2>
        </div>
    )
}

export default SidebarCategory;

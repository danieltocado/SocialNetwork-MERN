import React from 'react'
import "./sidebar.scss"

function SidebarCategory({ active, text }) {
    return (
        <div className={`category ${active && 'category--active'}`}>
            
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarCategory;

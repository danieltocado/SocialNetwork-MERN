import React from 'react';
import "./widgets.scss"

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <input placeholder="Search Twitter" type="text"/>
            </div>
            <div className="widgets_container">
                <h2>What's happening????</h2>
            </div>
        </div>
    )
}

export default Widgets

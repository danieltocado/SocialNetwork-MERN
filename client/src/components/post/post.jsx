import React from 'react'
import { Avatar } from "@material-ui/core"
import "./post.scss"

function Post({name,
    username,
    text,
    image,
    avatar,
    date}) {
    
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>{name}</h3> 
                        <span className="post_user">@{username}</span>
                        
                    </div>
                    <div className="post_headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt=""/>
                <div className="post_footer">
                    Like
                </div>
                <div className="post_date">
                    {date}
                </div>
            </div>
        </div>
    )
}

export default Post

import React from 'react'
import { Link } from 'react-router-dom';
import { Avatar } from "@material-ui/core"
import getHistory from '../../history'; 
import "./post.scss"
import Likes from '../likes/likes';

function Post({
    id,
    name,
    surname,
    username,
    text,
    image,
    avatar,
    date}) {

        
    //const user = useSelector(state => state.user);

    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <Link to={"/" + username}><h3>{name} {surname}</h3></Link> 
                        <span className="post_user">@{username}</span>
                        
                    </div>
                    <div className="post_headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" className="post_image"/>
                <div className="post_footer">
                    
                   {/* <Likes/> */}

                </div>
                <div className="post_date">
                    {date}
                </div>
            </div>
        </div>
    )
}

export default Post

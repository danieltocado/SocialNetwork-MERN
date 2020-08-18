import React from 'react'
import { Avatar, Button } from "@material-ui/core"
import { create } from "../../redux/actions/posts";
import "./posts.scss";


function Posts() {

    const onSubmit = (event) => {
        event.preventDefault();
        const post = {
          text: event.target.text.value,
          image: event.target.image.value,
          
        };
    
        create(post)
                
        console.log(post);
    };
    
    return (
        <div className="post_container">
            <form onSubmit={onSubmit}>
                <div className="post_form">
                    <Avatar src="https://i.pinimg.com/originals/c1/b1/a6/c1b1a627b61ad1fc5d62f85f777e365a.jpg"/>
                    <input placeholder="Qué está pasando?" type="text" name="text"/>
                </div>

                <input className="post_image" placeholder="Imagen url" type="text" name="image"/>
                <Button className="post_button" type="submit">Tweet</Button>
            </form>
        </div>
    )
}

export default Posts


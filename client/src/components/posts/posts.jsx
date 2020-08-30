import React from 'react'
import Axios from "axios";

import { connect } from 'react-redux'
import { Avatar, Button } from "@material-ui/core"
import { create } from "../../redux/actions/posts";
import "./posts.scss";



class Posts extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            user: "",
          };
    }

    componentDidMount() {
        Axios.get("http://localhost:3000/post/all").then((res) => {
          const posts = res.data;
          
          this.setState({ posts });
          console.log(posts)
        });
      }
     
      handleUpdate = () => {
        //by calling this method react re-renders the component
        this.componentDidMount();
      };

    onSubmit = (event) => {
        event.preventDefault();
        const post = {
          text: event.target.text.value,
          image: event.target.image.value,
          user: this.props.user._id
        };
    
        create(post)
        
        
        //window.location.reload()

        console.log(post);

    };

    render()
    {return (
        <div className="post_container">
            <form onSubmit={this.onSubmit}>
                <div className="post_form">
                    <Avatar src={this.props.user.avatar}/>
                    <input placeholder="Qué está pasando?" type="text" name="text"/>
                    
                </div>

                <input className="post_image" placeholder="Imagen url" type="text" name="image"/>
                <Button className="post_button" type="submit" onClick={this.handleUpdate}>Tweet</Button>
            </form>
        </div>
    )}

    const 
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Posts)  //withRouter


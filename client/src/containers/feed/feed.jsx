import React, { useState, useEffect, useSelector, Component } from "react";
import Axios from "axios";
import { connect } from 'react-redux'
import { create } from "../../redux/actions/posts";
import moment from "moment";
import { Avatar, Button } from "@material-ui/core"
import { BackTop } from 'antd';
import Posts from "../../components/posts/posts.jsx";
import Post from "../../components/post/post.jsx";
import "./feed.scss";


class Feed extends React.Component {
  state = {
    posts: [],
   
  };

  componentDidMount() {
    Axios.get("http://localhost:3000/post/all").then((res) => {
      const posts = res.data;
      
      this.setState({ posts });
      console.log(posts)
    });
  }

  handleUpdate = () => {
    //by calling this method react re-renders the component
    
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
    this.componentDidMount();

};

  render() {

    const posts = this.state.posts;
    console.log(posts);
    return (
      <div className="feed">
        {/* Header */}
        <div className="feed_header">
          <h2>Inicio</h2>
        </div>

        <div>
    </div>
        {/* TweetBox */}
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

        {/* Post */}
        <button id="feed" onClick={this.handleUpdate}>Update</button>

        {posts.map((post) => (
          <Post
            key={post._id}
            name={post.user?.name}
            surname={post.user?.surname}
            username={post.user?.username}
            text={post.text}
            avatar={post.user?.avatar}
            image={post.image}
            date={moment(post.date).calendar()}
          />
        ))}


        
      <a href="#feed">UP</a>

      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps)(Feed)

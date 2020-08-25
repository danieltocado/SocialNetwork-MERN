import React, { useState, useEffect, useSelector, Component } from "react";
import Axios from "axios";
import moment from "moment";
import { BackTop } from 'antd';
import Posts from "../../components/posts/posts.jsx";
import Post from "../../components/post/post.jsx";
import "./feed.scss";


export default class Feed extends React.Component {
  state = {
    posts: [],
    user: {},
  };

  componentDidMount() {
    Axios.get("http://localhost:3000/post/all").then((res) => {
      const posts = res.data;
      const user = res.data.user;
      this.setState({ posts });
      console.log(posts)
    });
  }

  handleUpdate = () => {
    //by calling this method react re-renders the component
    this.componentDidMount();
  };

  render() {
    return (
      <div className="feed">
        {/* Header */}
        <div className="feed_header">
          <h2>Inicio</h2>
        </div>
        {/* TweetBox */}
        <Posts />

        {/* Post */}
        <button id="feed" onClick={this.handleUpdate}>Update</button>
        {this.state.posts.map((post, key) => (
          
          <Post
            key={key}
            name={post.name}
            username={post.username}
            text={post.text}
            avatar="https://i.ytimg.com/vi/2ulh3M9sQM8/maxresdefault.jpg"
            image={post.image}
            date={moment(post.date).calendar()}
          />
        ))}
        
      <a href="#feed">UP</a>
    
        
       
      </div>
    );
  }
}

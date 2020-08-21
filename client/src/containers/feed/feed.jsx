import React, { useState, useEffect, useSelector } from "react";
import Axios from "axios";
import moment from "moment";
import Posts from "../../components/posts/posts.jsx";
import Post from "../../components/post/post.jsx";
import "./feed.scss";

export default class Feed extends React.Component {
  state = {
    posts: [],
    user: {}
  };

  
  componentDidMount() {
    Axios.get("http://localhost:3000/post/all").then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });

    

  }



  render() {
    return (
      <div className="feed">
        {/* Header */}
        <div className="feed_header">
          <h2>Home</h2>
        </div>
        {/* TweetBox */}
        <Posts />

        {/* Post */}
        <Post
          name="Pedro Sanchez"
          username="pedrosanchez"
          text="Viva España"
          avatar="https://www.finanzas.com/uploads/s1/10/11/63/08/pedro-sanchez_80_950x522.jpeg"
          image="https://okdiario.com/img/2020/07/23/pedro-piqueras-a-pedro-sanchez-655x368.jpg"
        />

        {this.state.posts.map((post) => (
          <Post
            name={"Daniel Tocado"}
            username="danieltocado"
            text={post.text}
            avatar="https://i.ytimg.com/vi/2ulh3M9sQM8/maxresdefault.jpg"
            image={post.image}
            date={moment(post.date).calendar()}
          />
        ))}
      </div>
    );
  }
}
